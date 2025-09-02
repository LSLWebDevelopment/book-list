import { useState } from "react";
import { BookCreate } from "./components/BookCreate";
import type { IBookCreate } from "./entities/books";
import { BookList } from "./components/BookList";

export function App() {
  const [books, setBooks] = useState<IBookCreate[]>([]);

  // const bookList = () => {};

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

  const bookDelete = (id: number) => {
    const updatedBooks = books.filter((book: IBookCreate) => {
      if (book.id !== id) {
        return book;
      }
    });
    setBooks(updatedBooks);
    alert("Book DELETED successfully!");
  };

  return (
    <div className="m-5">
      <BookCreate handleBookCreate={bookCreate} />
      <BookList
        books={books}
        handleBookEdition={bookEdit}
        handleBookDeletion={bookDelete}
      />
    </div>
  );
}

export default App;
