import { createContext, useState, type ReactNode } from "react";
import type {
  BookCreateEntity,
  BookEditEntity,
  BookListEntity,
} from "../entities/BookEntity";
import { getBookListService } from "../services/getBookListService";
import { createBookService } from "../services/createBookService";
import { deleteBookService } from "../services/deleteBookService";
import { editBookService } from "../services/editBookService";

interface BooksContextProviderProps {
  children: ReactNode;
}

interface BooksContextEntity {
  books: BookListEntity[];
  fetchBookList: () => void;
  handleBookCreation: (book: BookCreateEntity) => void;
  handleBookDeletion: (id: string) => void;
  handleBookEdition: (book: BookEditEntity) => void;
}

export const BookContext = createContext<BooksContextEntity | null>(null);

export function BooksContextProvider({ children }: BooksContextProviderProps) {
  const [books, setBooks] = useState<BookListEntity[]>([]);

  const fetchBookList = async () => {
    const data = await getBookListService();
    setBooks(data);
  };

  const handleBookCreation = async (book: BookCreateEntity) => {
    await createBookService(book);
    fetchBookList();
  };

  const handleBookEdition = async (newBook: BookEditEntity) => {
    await editBookService(newBook);
    fetchBookList();
  };

  const handleBookDeletion = async (id: string) => {
    await deleteBookService(id.toString());
    fetchBookList();
  };

  return (
    <BookContext.Provider
      value={{
        books,
        fetchBookList,
        handleBookEdition,
        handleBookCreation,
        handleBookDeletion,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
