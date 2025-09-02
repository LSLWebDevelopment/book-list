import { useState } from "react";
import { BookCreate } from "./components/BookCreate";
import type { IBookCreate } from "./entities/books";

export function App() {
  const [books, setBooks] = useState<IBookCreate[]>([]);

  const bookCreate = (data: IBookCreate) => {
    setBooks((prevBookArr: IBookCreate[]) => {
      return [...prevBookArr, data];
    });
    console.log("Create Book: ", books);
  };

  return <BookCreate handleBookCreate={bookCreate} />;
}

export default App;
