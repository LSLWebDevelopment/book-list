import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";
import type { IBookEdition } from "../entities/books";
import { BookEdit } from "./BookEdit";
import { Button } from "./Button";
import logo from "../assets/logo.png";

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
    <div className="flex justify-between relative h-25 border-2 border-gray-200 w-100 mt-2 rounded-sm shadow-xl bg-white">
      <figure>
        <img src={logo} alt="logo" width="80" />
      </figure>
      {!edit ? (
        <p className="absolute top-2 left-20 w-70">{book.title}</p>
      ) : (
        <BookEdit
          book={book}
          handleEdition={handleBookEdition}
          handleOpenCloseEditForm={handleOpenCloseEditForm}
        />
      )}
      <div>
        <Button
          onClick={handleOpenCloseEditForm}
          type="button"
          className="cursor-pointer absolute top-1 right-8"
        >
          <LuPencil />
        </Button>
        &emsp;
        <Button
          onClick={onBookDeletion}
          type="button"
          className="cursor-pointer absolute top-1 right-3"
        >
          <FaRegTrashCan />
        </Button>
      </div>
    </div>
  );
}
