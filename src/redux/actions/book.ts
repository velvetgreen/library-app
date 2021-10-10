import {
  BOOK_ERROR, BOOK_RECEIVED, BOOK_REQUESTED,
} from 'redux/types';
import qs from 'query-string';
import { GOOGLE_API_KEY } from 'config';

export function fetchBook(ID: string) {
  return async (dispatch: any) => {
    try {
      const query = qs.stringify({
        key: GOOGLE_API_KEY,
      });

      dispatch({ type: BOOK_REQUESTED });

      const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${ID}?${query}`);
      const data = await response.json();

      dispatch({ type: BOOK_RECEIVED, payload: data });
    } catch (e) {
      dispatch({ type: BOOK_ERROR, payload: e });
    }
  };
}
