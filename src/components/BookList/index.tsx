import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from 'components/Error';
import { BookCard } from 'components/BookCard';
import { NEXT_PAGE } from 'redux/types';
import s from './index.module.css';
import { Loader } from '../Loader';
import { IAppState } from '../../types';

export const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const {
    data, error, isLoading,
  } = useSelector((state: IAppState) => state.books);
  const page = useSelector((state: IAppState) => state.page);

  const loadMore = () => {
    dispatch({ type: NEXT_PAGE });
  };

  if (error) return <Error error={error} />;
  if (!data && !isLoading) return <div className={s.hello}>Start searching!</div>;
  if (isLoading && page === 0) return <div className={s.loader}><Loader /></div>;
  if (!data?.items?.length) return <div className={s.nothingFound}>Oops! Nothing found</div>;

  return (
    <div className={s.root}>
      <h3 className={s.totalItems}>
        Found
        {' '}
        {data?.totalItems}
        {' '}
        books
      </h3>
      <div className={s.cards}>
        {data?.items.map((item, idx) => (
          <Link to={`/book/${item.id}`} key={item.id + idx} style={{ textDecoration: 'none' }}>
            <BookCard item={item.volumeInfo} />
          </Link>
        ))}
      </div>
      {isLoading
        ? <Loader />
        : (
          <button
            type="button"
            className={s.loadMore}
            onClick={loadMore}
          >
            Load more
            {' '}
            <i className="bi bi-arrow-down-circle" />
          </button>
        )}
    </div>
  );
};
