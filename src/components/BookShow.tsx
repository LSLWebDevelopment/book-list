import { useState } from "react";
import { BookEdit } from "./BookEdit";
import type { IBookEdition } from "../entities/books";
import { Button } from "./Button";

interface BookItem {
  id: number;
  title: string;
}

interface BookShowProps {
  book: BookItem;
  handleBookEdition: (data: IBookEdition) => void;
  handleBookDeletion: (id: number) => void;
}

export function BookShow({
  book,
  handleBookEdition,
  handleBookDeletion,
}: BookShowProps) {
  const [edit, setEdit] = useState(false);

  const handleOpenCloseEditForm = () => {
    setEdit(!edit);
  };

  const onBookDeletion = () => {
    handleBookDeletion(book.id);
  };

  return (
    <div>
      <Button onClick={onBookDeletion} type="button">
        Delete
      </Button>
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
