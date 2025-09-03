import { useState, type ChangeEvent, type FormEvent } from "react";
import logo from "../assets/logo.png";
import type { IBookEdition, IBookEntity } from "../entities/books";
import { Button } from "./Button";
interface BookEditProps {
  book: IBookEntity;
  handleOpenCloseEditForm: () => void;
  handleEdition: (data: IBookEdition) => void;
}

export function BookEdit({
  handleOpenCloseEditForm,
  handleEdition,
  book,
}: BookEditProps) {
  const [title, setTitle] = useState(book.title);

  const closeEdition = () => {
    handleOpenCloseEditForm();
  };

  const handleBookEdition = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      id: book.id,
      title,
    };

    closeEdition();

    handleEdition(data);
  };

  return (
    <div className="flex border-2 border-gray-200 w-100 -mt-1 rounded-sm shadow-xl bg-white absolute z-0">
      <figure>
        <img src={logo} alt="logo" width="100" />
      </figure>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center mx-auto mb-5 rounded-2xl ml-0"
      >
        <div>
          <label htmlFor="title" className="font-semibold">
            Title
          </label>
          <br />
          <input
            type="text"
            value={title}
            onChange={handleBookEdition}
            autoFocus
            className="border rounded-sm border-gray-200 w-60 px-2 mb-1 mt-1 outline-none"
          />
          <br />
          <Button
            className="border border-gray-600 w-20 rounded-sm text-sm"
            type="button"
            onClick={closeEdition}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
