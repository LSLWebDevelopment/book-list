import type { BookEditEntity, BookEntity } from "../entities/BookEntity";
import { ShowBook } from "./ShowBook";

interface ListBooksProps {
  books: BookEntity[];
  onDeletion: (id: string) => void;
  onEdition: (book: BookEditEntity) => void;
}

export function ListBooks({ books, onDeletion, onEdition }: ListBooksProps) {
  const renderedBooks = books.map((book: BookEntity) => {
    return (
      <ShowBook
        key={book.id}
        book={book}
        onDeletion={onDeletion}
        onEdition={onEdition}
      />
    );
  });

  return <div className="flex flex-wrap">{renderedBooks}</div>;
}
