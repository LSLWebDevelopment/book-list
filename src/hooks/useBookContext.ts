import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export function useBookContext() {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("The context was not created!");
  }
  return context;
}
