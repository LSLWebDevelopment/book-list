import { useState, type ChangeEvent, type FormEvent } from "react";
import type { BookEditEntity, BookEntity } from "../entities/BookEntity";
import { fetchImage } from "../services/getBookImageService";
import { useBookContext } from "../hooks/useBookContext";
import { ListBookImagesModal } from "./ListBookImagesModal";

interface EditBookProps {
  onCloseEditing: () => void;
  book: BookEntity;
}

export function EditBook({ onCloseEditing, book }: EditBookProps) {
  const { displayModal, handleDisplayModal } = useBookContext();
  const { handleBookEdition } = useBookContext();
  const [title, setTitle] = useState(book.title);
  const [image, setImage] = useState("");

  const handleSetImage = (img: string) => {
    setImage(img);
  };

  const handleEdition = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const newBook: BookEditEntity = {
      id: book.id,
      img: image,
      title,
    };

    setTitle("");
    setImage("");
    onCloseEditing();
    handleBookEdition(newBook);
  };

  return (
    <>
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
        <button
          onClick={handleDisplayModal}
          className="border-1 w-30 h-10 mt-2 ml-2 bg-green-200"
          type="button"
        >
          Choose Image
        </button>
      </form>

      {displayModal && (
        <ListBookImagesModal
          onImageChosen={handleSetImage}
          onModalClosed={handleDisplayModal}
        />
      )}
    </>
  );
}
