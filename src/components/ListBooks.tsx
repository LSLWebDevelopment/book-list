import type { BookEditEntity, BookEntity } from "../entities/BookEntity";
import { useBookContext } from "../hooks/useBookContext";
import { ShowBook } from "./ShowBook";

export function ListBooks() {
  const context = useBookContext();

  if (!context) {
    throw new Error("Error creating BookContext");
  }

  const { books } = context;

  const renderedBooks = books.map((book: BookEntity) => {
    return <ShowBook key={book.id} book={book} />;
  });

  return <div className="flex flex-wrap">{renderedBooks}</div>;
}
