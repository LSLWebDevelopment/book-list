import { useEffect } from "react";
import { CreatBook } from "./components/CreateBook";
import { ListBooks } from "./components/ListBooks";
import { useBookContext } from "./hooks/useBookContext";

export function App() {
  const { fetchBookList } = useBookContext();

  useEffect(() => {
    fetchBookList();
  }, []);

  return (
    <div className="p-5">
      <h1 className="font-bold text-5xl text-blue-500">Reading List</h1>
      <CreatBook />
      <ListBooks />
    </div>
  );
}
