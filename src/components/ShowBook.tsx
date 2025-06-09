import { useState } from "react";
import type { BookEditEntity, BookEntity } from "../entities/BookEntity";
import { EditBook } from "./EditBook";
import { useBookContext } from "../hooks/useBookContext";

interface ShowBookProps {
  book: BookEntity;
}

export function ShowBook({ book }: ShowBookProps) {
  const { handleBookDeletion } = useBookContext();

  const [isEditing, setIsEditing] = useState(false);

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="pl-5 pt-2 pr-2 bg-gray-300 border-2 border-gray-200">
      <figure>
        <img className="w-80" src={book.img} alt={book.title} />
      </figure>
      <div className="flex justify-end gap-2 mb-5">
        <button
          type="button"
          onClick={handleIsEditing}
          className="bg-amber-200 border-amber-400 border-2 py-1 px-3 cursor-pointer"
        >
          Edit
        </button>
        <button
          type="submit"
          className="bg-red-300 border-2 border-red-500  py-1 px-3  cursor-pointer"
          onClick={() => handleBookDeletion(book.id)}
        >
          Delete
        </button>
      </div>
      {isEditing ? (
        <EditBook onCloseEditing={handleIsEditing} book={book} />
      ) : (
        <p>{book.title}</p>
      )}
    </div>
  );
}
