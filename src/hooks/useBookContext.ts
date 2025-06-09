import { useContext } from "react";
import { BookContext } from "../context/BooksContext";

export function useBookContext() {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("Error creating BookContext");
  }

  return context;
}
