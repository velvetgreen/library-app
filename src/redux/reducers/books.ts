import { IAppState } from 'types';
import {
  BOOKS_ERROR,
  BOOKS_RECEIVED,
  BOOKS_RECEIVED_MORE,
  BOOKS_REQUESTED,
} from '../types';

const initialState: IAppState['books'] = {
  data: null,
  isLoading: false,
  error: null,
};
export const booksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BOOKS_REQUESTED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case BOOKS_RECEIVED: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case BOOKS_RECEIVED_MORE: {
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          items: [
            ...state.data!.items,
            ...action.payload.items,
          ],
        },
      };
    }
    case BOOKS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: return state;
  }
};
