import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchBook } from 'redux/actions/book';
import { IAppState } from 'types';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';
import s from './index.module.css';

export const Book: React.FC = () => {
  const dispatch = useDispatch();
  const book = useSelector((state: IAppState) => state.book.data?.volumeInfo);
  const error = useSelector((state: IAppState) => state.book.error);
  const authors = useSelector((state: IAppState) => state.book.data?.volumeInfo?.authors?.join(', '));
  const { id } = useParams<{id: string}>();
  const imageLink = useMemo(() => book?.imageLinks?.small.replace('http', 'https'), [book?.imageLinks?.small]);

  useEffect(() => {
    dispatch(fetchBook(id));
  }, [id]);

  if (error) return <Error error={error} />;
  if (!book) return <div className={s.loader}><Loader /></div>;

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.bookImage}>
          {imageLink
            ? <img src={imageLink || book?.imageLinks.thumbnail} alt="book" />
            : <div className={s.error}>No picture found</div>}
        </div>
        <div className={s.bookInfo}>
          <div className={s.categories}>
            {book?.categories?.map((category, idx) => (
              <p key={idx} className={s.category}>
                {category}
              </p>
            ))}
          </div>
          <h2 className={s.title}>{book?.title}</h2>
          <div className={s.authors}>
            {authors}
          </div>
          <p
            className={s.description}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: book?.description }}
          />
          <Link to="/" className={s.backButton}>Back to Search Results</Link>
        </div>
      </div>
    </div>
  );
};
