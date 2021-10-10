import { SEARCH_SET_CATEGORY, SEARCH_SET_SORTING } from 'redux/types';

export const setSeachCategory = (payload: string) => ({ type: SEARCH_SET_CATEGORY, payload });
export const setSeachSorting = (payload: string) => ({ type: SEARCH_SET_SORTING, payload });
