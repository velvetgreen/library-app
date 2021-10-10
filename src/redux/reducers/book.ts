import { IAppState } from 'types';
import {
  BOOK_ERROR,
  BOOK_RECEIVED,
  BOOK_REQUESTED,
} from '../types';

const initialState: IAppState['books'] = {
  data: null,
  isLoading: false,
  error: null,
};
export const bookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BOOK_REQUESTED: {
      return { ...state, isLoading: true };
    }
    case BOOK_RECEIVED: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case BOOK_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: return state;
  }
};
