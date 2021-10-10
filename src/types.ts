export type BookType = {
  id: string,
  volumeInfo: {
    title: string,
    authors: string[],
    publishedDate: string,
    description: string,
    pageCount: number
    imageLinks: {
      thumbnail: string
      small: string
    }
    categories: string[]
  }
}
export type BooksAPIType = {
  kind: string,
  totalItems: number,
  items: BookType [],
}
export interface IAppState {
  books: {
    data: BooksAPIType | null
    isLoading: boolean
    error: any
  }
  book: {
    data: BookType | null
    isLoading: boolean
    error: any
  }
  page: number
  search: {
    category: string | null
    sorting: string
  }
}
