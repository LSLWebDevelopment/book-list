import { useEffect, useState } from "react";
import { CreatBook } from "./components/CreateBook";
import type { BookEntity } from "./entities/BookEntity";
import { ListBooks } from "./components/ListBooks";
import axios from "axios";
import { getBookListService } from "./services/getBookListService";
import { createBookService } from "./services/createBookService";
import { fetchImage } from "./services/getBookImageService";

export function App() {
  const [books, setBooks] = useState<BookEntity[]>([]);

  const fetchBookList = async () => {
    const data = await getBookListService();
    setBooks(data);
  };

  useEffect(() => {
    fetchBookList();
  }, []);

  const handleBookCreation = async (book: BookEntity) => {
    try {
      const image = await fetchImage(book.title);
      book.img = image;
      await createBookService(book);
      setBooks((prevBooks: BookEntity[]) => {
        return [book, ...prevBooks];
      });
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleBookDeletion = (id: number) => {
    const filteredBooks = books.filter((book: BookEntity) => {
      return book.id !== id;
    });

    setBooks(filteredBooks);
  };

  const handleBookEdition = (newBook: BookEntity) => {
    const filteredBooks = books.map((book: BookEntity) => {
      if (book.id === newBook.id) {
        // return newBook;
        return newBook;
      }
      return book;
    });
    try {
      setBooks(filteredBooks);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="font-bold text-5xl text-blue-500">Reading List</h1>
      <CreatBook onBookCreate={handleBookCreation} />
      <ListBooks
        books={books}
        onDeletion={handleBookDeletion}
        onEdition={handleBookEdition}
      />
    </div>
  );
}
