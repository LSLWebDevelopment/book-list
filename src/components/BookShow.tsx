import { useState } from "react";
import { BookEdit } from "./BookEdit";
import type { IBookEdition } from "../entities/books";

interface BookItem {
  id: number;
  title: string;
}

interface BookShowProps {
  book: BookItem;
  handleBookEdition: (data: IBookEdition) => void;
}

export function BookShow({ book, handleBookEdition }: BookShowProps) {
  const [edit, setEdit] = useState(false);

  const handleOpenCloseEditForm = () => {
    setEdit(!edit);
  };

  return (
    <div>
      {!edit ? (
        <li onClick={handleOpenCloseEditForm}>{book.title}</li>
      ) : (
        <BookEdit
          book={book}
          handleEdition={handleBookEdition}
          handleOpenCloseEditForm={handleOpenCloseEditForm}
        />
      )}
    </div>
  );
}
