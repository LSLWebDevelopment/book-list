import { useEffect, useState } from "react";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";
import type { IBookCreate, IBookEdition, IBookEntity } from "./entities/books";
import { createBookService } from "./services/createBookService";
import { deleteBookService } from "./services/deleteBookService";
import { editBookService } from "./services/editBookService";
import { getBookListService } from "./services/getBookListService";
// import path from "path";

export function App() {
  const [books, setBooks] = useState<IBookEntity[]>([]);

  useEffect(() => {
    bookList();
  }, []);

  const bookList = async () => {
    const response = await getBookListService();
    setBooks(response);
  };

  const bookCreate = async (data: IBookCreate) => {
    const response = await createBookService(data);

    setBooks((prevBookArr: IBookEntity[]) => {
      return [...prevBookArr, response];
    });

    alert("Book CREATED successfully!");
  };

  const bookEdit = async (data: IBookEdition) => {
    const response = await editBookService(data);

    const filteredBooks = books.map((book: IBookEdition) => {
      if (data.id === book.id) {
        // return data;
        return { ...book, title: response.title };
      }
      return book;
    });
    setBooks(filteredBooks);
    alert("Book EDITED successfully!");
  };

  const bookDelete = async (id: string) => {
    const answer = prompt(
      "Are you sure you want to delete this book? Type Yes or No"
    );

    if (answer?.toLowerCase().trim() === "no") {
      return;
    }

    const response = await deleteBookService(id);
    const updatedBooks = books.filter((book: IBookEntity) => {
      if (book.id !== response.id) {
        return book;
      }
    });
    setBooks(updatedBooks);
    alert("Book DELETED successfully!");
  };

  return (
    <div className="m-5">
      <BookCreate handleBookCreate={bookCreate} />
      <BookList
        books={books}
        handleBookEdition={bookEdit}
        handleBookDeletion={bookDelete}
      />
    </div>
  );
}

export default App;
