import { useState, type ChangeEvent, type FormEvent } from "react";
import type { BookEntity } from "../entities/BookEntity";

interface EditBookProps {
  onCloseEditing: () => void;
  onEdition: (newBook: BookEntity) => void;
  book: BookEntity;
}

export function EditBook({ onCloseEditing, onEdition, book }: EditBookProps) {
  const [title, setTitle] = useState(book.title);

  const handleEdition = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newBook = {
      id: book.id,
      title,
    };
    onCloseEditing();
    onEdition(newBook);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <label htmlFor="newTitle">Title</label>
        <button
          onClick={onCloseEditing}
          type="button"
          className="bg-gray-600 px-3 text-white cursor-pointer"
        >
          X
        </button>
      </div>

      <input
        className="border py-1 px-3 my-3 bg-white"
        type="text"
        name="newTitle"
        id="newTitle"
        value={title}
        onChange={handleEdition}
      />
      <br />
      <button type="submit" className="border py-1 px-3">
        Save
      </button>
    </form>
  );
}
