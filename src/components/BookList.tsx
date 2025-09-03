import type { IBookEdition } from "../entities/books";
import { BookShow } from "./BookShow";
interface BookItem {
  id: string;
  title: string;
}

interface BookListProps {
  books: BookItem[];
  handleBookEdition: (data: IBookEdition) => void;
  handleBookDeletion: (id: string) => void;
}

export function BookList({
  books,
  handleBookEdition,
  handleBookDeletion,
}: BookListProps) {
  const renderedBooks = books.map(({ id, title }: BookItem) => {
    return (
      <BookShow
        key={id}
        book={{ id, title }}
        handleBookEdition={handleBookEdition}
        handleBookDeletion={handleBookDeletion}
      />
    );
  });

  return <div className="flex flex-wrap gap-5 mt-5">{renderedBooks}</div>;
}
