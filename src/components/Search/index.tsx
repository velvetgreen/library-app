import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchBooks } from 'redux/actions/books';
import { setSeachCategory, setSeachSorting } from 'redux/actions/search';
import { SET_PAGE } from 'redux/types';
import { IAppState } from 'types';
import s from './index.module.css';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const history = useHistory();

  const page = useSelector((state: IAppState) => state.page);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    if (inputValue) {
      submit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue) {
      submit();
    }
  };

  const submit = () => {
    if (pathname !== '/') {
      history.push('/');
    }
    dispatch({ type: SET_PAGE, payload: 0 });
    dispatch(fetchBooks(inputValue));
  };

  // load more
  useEffect(() => {
    if (page > 0) {
      dispatch(fetchBooks(inputValue));
    }
  }, [page]);

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSeachCategory(e.target.value));
    submit();
  };
  const handleChangeSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSeachSorting(e.target.value));
    submit();
  };
  return (
    <div className={s.root}>
      <div className={s.search}>
        <input
          className={s.input}
          type="text"
          placeholder="Search books"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
        <button className={s.button} type="button" onClick={() => handleClick()}>
          <i className="bi bi-search" />
        </button>
      </div>
      <div className={s.settings}>
        <select className={s.select} onChange={handleChangeCategory}>
          <option value="default">All</option>
          <option value="art">Art</option>
          <option value="biography">Biography</option>
          <option value="computers">Computers</option>
          <option value="history">History</option>
          <option value="medical">Medical</option>
          <option value="poetry">Poetry</option>
        </select>
        <select className={s.select} onChange={handleChangeSorting}>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
};
