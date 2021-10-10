import {
  BOOKS_ERROR, BOOKS_RECEIVED, BOOKS_RECEIVED_MORE, BOOKS_REQUESTED,
} from 'redux/types';
import qs from 'query-string';
import { GOOGLE_API_KEY, SEARCH_ITEMS_PERPAGE } from 'config';

export function fetchBooks(value: string) {
  return async (dispatch: any, getState: any) => {
    try {
      const { category, sorting } = getState().search;
      const { page } = getState();

      const query = qs.stringify({
        q: `${value}:${category}`,
        orderBy: sorting,
        maxResults: SEARCH_ITEMS_PERPAGE,
        startIndex: SEARCH_ITEMS_PERPAGE * page,
        key: GOOGLE_API_KEY,
      });

      dispatch({ type: BOOKS_REQUESTED });

      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?${query}`);
      const data = await response.json();

      if (page > 0) {
        dispatch({ type: BOOKS_RECEIVED_MORE, payload: data });
      } else {
        dispatch({ type: BOOKS_RECEIVED, payload: data });
      }
    } catch (e) {
      dispatch({ type: BOOKS_ERROR, payload: e });
    }
  };
}
