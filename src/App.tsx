import { useState } from "react";
import { BookCreate } from "./components/BookCreate";
import type { IBookCreate } from "./entities/books";
import { BookList } from "./components/BookList";

export function App() {
  const [books, setBooks] = useState<IBookCreate[]>([]);

  const bookList = () => {};

  const bookCreate = (data: IBookCreate) => {
    setBooks((prevBookArr: IBookCreate[]) => {
      return [...prevBookArr, data];
    });
    alert("Book CREATED successfully!");
  };

  const bookEdit = (data: IBookCreate) => {
    const filteredBooks = books.map((book: IBookCreate) => {
      if (data.id === book.id) {
        return data;
      }
      return book;
    });
    setBooks(filteredBooks);
    alert("Book EDITED successfully!");
  };

  return (
    <div>
      <BookCreate handleBookCreate={bookCreate} />
      <BookList books={books} handleBookEdition={bookEdit} />
    </div>
  );
}

export default App;
