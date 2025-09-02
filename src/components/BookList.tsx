import { useState } from "react";
import { BookEdit } from "./BookEdit";

interface BookItem {
  id: number;
  title: string;
}

interface BookListProps {
  books: BookItem[];
}

export function BookList({ books }: BookListProps) {
  const [edit, setEdit] = useState(false);

  const renderedBooks = books.map(({ id, title }: BookItem) => {
    return (
      <li key={id} onClick={() => setEdit(!edit)}>
        {edit ? <BookEdit /> : title}
      </li>
    );
  });

  return <ul>{renderedBooks}</ul>;
}
