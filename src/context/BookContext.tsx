import { createContext, useState, type ReactNode } from "react";
import type { IBookCreate, IBookEdition, IBookEntity } from "../entities/books";
import { getBookListService } from "../services/getBookListService";
import { createBookService } from "../services/createBookService";
import { deleteBookService } from "../services/deleteBookService";
import { editBookService } from "../services/editBookService";

interface IBookContext {
  books: IBookEntity[];
  bookList: () => void;
  bookEdit: (data: IBookEdition) => void;
  bookDelete: (id: string) => void;
  bookCreate: (data: IBookCreate) => void;
  setBooks: React.Dispatch<React.SetStateAction<IBookEntity[]>>;
}

interface BookContextProviderProps {
  children: ReactNode;
}

export const BookContext = createContext<IBookContext | null>(null);

export function BookContextProvider({ children }: BookContextProviderProps) {
  const [books, setBooks] = useState<IBookEntity[]>([]);

  const bookList = async () => {
    const response = await getBookListService();
    setBooks(response);
  };

  const bookCreate = async (data: IBookCreate) => {
    const response = await createBookService(data);

    setBooks((prevBookArr: IBookEntity[]) => {
      return [...prevBookArr, response];
    });

    alert("Book CREATED successfully!");
  };

  const bookDelete = async (id: string) => {
    const answer = prompt(
      "Are you sure you want to delete this book? Type Yes or No"
    );

    if (answer?.toLowerCase().trim() === "no") {
      return;
    }

    const response = await deleteBookService(id);
    const updatedBooks = books.filter((book: IBookEntity) => {
      if (book.id !== response.id) {
        return book;
      }
    });
    setBooks(updatedBooks);
    alert("Book DELETED successfully!");
  };

  const bookEdit = async (data: IBookEdition) => {
    const response = await editBookService(data);

    const filteredBooks = books.map((book: IBookEdition) => {
      if (data.id === book.id) {
        return { ...book, ...response };
      }
      return book;
    });
    setBooks(filteredBooks);
    alert("Book EDITED successfully!");
  };

  const dataToShare = {
    books,
    setBooks,
    bookList,
    bookEdit,
    bookDelete,
    bookCreate,
  };

  return (
    <BookContext.Provider value={dataToShare}>{children}</BookContext.Provider>
  );
}
