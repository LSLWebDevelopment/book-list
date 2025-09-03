import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "./Button";
import { Header } from "./Header";
import type { IBookCreate } from "../entities/books";

interface BookCreateProps {
  handleBookCreate: (data: IBookCreate) => void;
}

export function BookCreate({ handleBookCreate }: BookCreateProps) {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSutmit = (event: FormEvent) => {
    event.preventDefault();

    if (title === "") {
      alert("You have to enter at least ONE WORD for the title field.");
      return;
    }

    const data = {
      title,
      // id: Math.floor(Math.random() * 999),
    };

    setTitle("");
    handleBookCreate(data);
  };

  return (
    <div className="border-2 border-gray-200 w-150 mx-auto mt-5 rounded-sm shadow-xl bg-white">
      <div>
        <Header title="Add a Book" />
      </div>
      <form
        onSubmit={handleSutmit}
        className="flex justify-center mx-auto mb-5 rounded-2xl"
      >
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            value={title}
            autoFocus
            onChange={handleTitleChange}
            className="border rounded-sm border-gray-200 w-80 py-1 px-2 mb-3 mt-1 outline-none"
          />
          <br />
          <div className="text-center">
            <Button
              className="border-2 border-gray-600 w-30 py-1 rounded-sm font-semibold"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
