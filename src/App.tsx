import { useEffect, useState } from "react";
import { CreatBook } from "./components/CreateBook";
import { ListBooks } from "./components/ListBooks";
import type {
  BookCreateEntity,
  BookEditEntity,
  BookListEntity,
} from "./entities/BookEntity";
import { createBookService } from "./services/createBookService";
import { deleteBookService } from "./services/deleteBookService";
import { getBookListService } from "./services/getBookListService";
import { editBookService } from "./services/editBookService";
import { ListBookImagesModal } from "./components/ListBookImagesModal";

export function App() {
  const [books, setBooks] = useState<BookListEntity[]>([]);
  const [displayModal, setDisplayModal] = useState(false);

  const handleDisplayModal = () => {
    setDisplayModal(!displayModal);
  };

  const fetchBookList = async () => {
    const data = await getBookListService();
    setBooks(data);
  };

  useEffect(() => {
    fetchBookList();
  }, []);

  const handleBookCreation = async (book: BookCreateEntity) => {
    await createBookService(book);
    fetchBookList();
  };

  const handleBookDeletion = async (id: string) => {
    await deleteBookService(id.toString());
    fetchBookList();
  };

  const handleBookEdition = async (newBook: BookEditEntity) => {
    await editBookService(newBook);
    fetchBookList();
  };

  return (
    <div className="p-5">
      <h1 className="font-bold text-5xl text-blue-500">Reading List</h1>
      <CreatBook
        onBookCreate={handleBookCreation}
        onDisplayModal={handleDisplayModal}
      />
      <ListBooks
        books={books}
        onDeletion={handleBookDeletion}
        onEdition={handleBookEdition}
      />
      {displayModal && <ListBookImagesModal />}
    </div>
  );
}
