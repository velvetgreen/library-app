import { IAppState } from 'types';
import { SEARCH_SET_CATEGORY, SEARCH_SET_SORTING } from '../types';

const initialState: IAppState['search'] = {
  category: null,
  sorting: 'relevance',

};
export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_SET_CATEGORY: {
      return { ...state, category: action.payload };
    }
    case SEARCH_SET_SORTING: {
      return { ...state, sorting: action.payload };
    }
    default: return state;
  }
};
