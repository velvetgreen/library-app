import {
  SET_PAGE, NEXT_PAGE,
} from '../types';

const initialState = 0;

export const pageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PAGE: {
      return action.payload;
    }
    case NEXT_PAGE: {
      return state + 1;
    }
    default: return state;
  }
};
