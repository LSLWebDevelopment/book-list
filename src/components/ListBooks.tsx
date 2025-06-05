import type { BookEntity } from "../entities/BookEntity";
import { ShowBook } from "./ShowBook";

interface ListBooksProps {
  books: BookEntity[];
  onDeletion: (id: number) => void;
  onEdition: (book: BookEntity) => void;
}

export function ListBooks({ books, onDeletion, onEdition }: ListBooksProps) {
  const renderedBooks = books.map((book: BookEntity) => {
    return (
      <ShowBook
        key={book.id}
        book={book}
        onClick={onDeletion}
        onEdition={onEdition}
      />
    );
  });

  return <div className="flex flex-wrap">{renderedBooks}</div>;
}
