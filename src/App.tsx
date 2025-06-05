import { useEffect, useState } from "react";
import { CreatBook } from "./components/CreateBook";
import type { BookEntity } from "./entities/BookEntity";
import { ListBooks } from "./components/ListBooks";
import axios from "axios";

export function App() {
  const [books, setBooks] = useState<BookEntity[]>([]);

  const fetchImage = async (imageTitle: string) => {
    const searchEngineId = "e32636db426d6487e";
    const apiKey = "AIzaSyDORl1S1YOGf7Dk4c5O0-a8ZjNjedZA4p8";
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${imageTitle}&searchType=image`
    );
    return response.data.items[0].link;
  };

  const handleBookCreation = async (book: BookEntity) => {
    try {
      const image = await fetchImage(book.title);
      book.img = image;
      setBooks((prevBooks: BookEntity[]) => {
        return [book, ...prevBooks];
      });
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleBookDeletion = (id: number) => {
    const filteredBooks = books.filter((book: BookEntity) => {
      return book.id !== id;
    });

    setBooks(filteredBooks);
  };

  const handleBookEdition = (newBook: BookEntity) => {
    const filteredBooks = books.map((book: BookEntity) => {
      if (book.id === newBook.id) {
        // return newBook;
        return newBook;
      }
      return book;
    });
    try {
      setBooks(filteredBooks);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="font-bold text-5xl text-blue-500">Reading List</h1>
      <CreatBook onBookCreate={handleBookCreation} />
      <ListBooks
        books={books}
        onDeletion={handleBookDeletion}
        onEdition={handleBookEdition}
      />
    </div>
  );
}
