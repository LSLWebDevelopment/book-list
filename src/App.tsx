import { useEffect } from "react";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";
import { useBookContext } from "./hooks/useBookContext";

export function App() {
  const { bookList } = useBookContext();

  useEffect(() => {
    bookList();
  }, []);

  return (
    <div className="m-5">
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
