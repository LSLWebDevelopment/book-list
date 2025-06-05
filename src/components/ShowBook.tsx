import { useState } from "react";
import type { BookEntity } from "../entities/BookEntity";
import { EditBook } from "./EditBook";

interface ShowBookProps {
  book: BookEntity;
  onClick: (id: number) => void;
  onEdition: (book: BookEntity) => void;
}

export function ShowBook({ book, onClick, onEdition }: ShowBookProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="pl-5 pt-2 pr-2 bg-gray-300 border-2 border-gray-200">
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
          onClick={() => onClick(book.id)}
        >
          Delete
        </button>
      </div>
      {isEditing ? (
        <EditBook onClick={setIsEditing} book={book} onEdition={onEdition} />
      ) : (
        <p>{book.title}</p>
      )}
    </div>
  );
}
