import { useState, type ChangeEvent, type FormEvent } from "react";
import type { IBookCreate, IBookEdition } from "../entities/books";
import { Button } from "./Button";
interface BookEditProps {
  book: IBookCreate;
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" value={title} onChange={handleBookEdition} />
        <br />
      </div>
      <Button type="button" onClick={closeEdition}>
        Save
      </Button>
    </form>
  );
}
