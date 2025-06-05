import { useState } from "react";
import { CreatBook } from "./components/CreateBook";
import type { BookEntity } from "./entities/BookEntity";
import { ListBooks } from "./components/ListBooks";

export function App() {
  const [books, setBooks] = useState<BookEntity[]>([]);

  const handleBookCreation = (book: BookEntity) => {
    try {
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
    console.log("error");
    const filteredBooks = books.map((book: BookEntity) => {
      if (book.id === newBook.id) {
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
