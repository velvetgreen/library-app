import { combineReducers } from 'redux';
import { bookReducer } from './book';
import { booksReducer } from './books';
import { pageReducer } from './page';
import { searchReducer } from './search';

export const rootReducer = combineReducers({
  books: booksReducer,
  book: bookReducer,
  page: pageReducer,
  search: searchReducer,
});
