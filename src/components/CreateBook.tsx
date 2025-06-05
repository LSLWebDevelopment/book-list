import { useState, type ChangeEvent, type FormEvent } from "react";
import type { BookEntity } from "../entities/BookEntity";

interface CreateBookProps {
  onBookCreate: (book: BookEntity) => void;
}

export function CreatBook({ onBookCreate }: CreateBookProps) {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newBook = {
      id: Math.floor(Math.random() * 9999) + 1,
      title,
    };

    setTitle("");
    onBookCreate(newBook);
  };

  return (
    <form onSubmit={handleSubmit} className="m-5 border-2 p-5 bg-amber-200">
      <div>
        <h2 className="text-3xl mb-5">Add a Book</h2>
        <label className="text-2xl" htmlFor="title">
          Title
        </label>
        <br />
        <input
          className="border-1 w-100 h-10 bg-gray-300 p-3"
          autoFocus
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <button className="border-1 w-30 h-10 mt-2 bg-green-200" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
