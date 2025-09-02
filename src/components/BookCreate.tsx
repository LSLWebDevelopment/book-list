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

    const data = {
      title,
      id: Math.floor(Math.random() * 999),
    };

    handleBookCreate(data);
  };

  return (
    <form onSubmit={handleSutmit}>
      <div>
        <Header title="Add a Book" />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" value={title} onChange={handleTitleChange} />
        <br />
        <Button>Submit</Button>
      </div>
    </form>
  );
}
