import { useState, type ChangeEvent, type FormEvent } from "react";
import type { BookEditEntity, BookEntity } from "../entities/BookEntity";
import { fetchImage } from "../services/getBookImageService";

interface EditBookProps {
  onCloseEditing: () => void;
  onEdition: (newBook: BookEditEntity) => void;
  book: BookEntity;
}

export function EditBook({ onCloseEditing, onEdition, book }: EditBookProps) {
  const [title, setTitle] = useState(book.title);

  const handleEdition = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const image = await fetchImage(title);

    const newBook: BookEditEntity = {
      id: book.id,
      img: image,
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
