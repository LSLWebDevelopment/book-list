import type { IBookEdition } from "../entities/books";
import { BookShow } from "./BookShow";
interface BookItem {
  id: number;
  title: string;
}

interface BookListProps {
  books: BookItem[];
  handleBookEdition: (data: IBookEdition) => void;
}

export function BookList({ books, handleBookEdition }: BookListProps) {
  const renderedBooks = books.map(({ id, title }: BookItem) => {
    return (
      <BookShow
        key={id}
        book={{ id, title }}
        handleBookEdition={handleBookEdition}
      />
    );
  });

  return <ul>{renderedBooks}</ul>;
}
