export interface BooksInterface {
    id: number;
    title: string;
    author: string;
    publisher: string;
    pages: number;
    read: number;
    isReading: boolean;
  }
  export interface BookComponentProps {
    book: BooksInterface;
    updateBookStatus:(id: number, isReading: boolean) => void
    deleteBook:(bookId : number) => void
  }
  export interface MyBookInterface{
    book:BooksInterface
  }