import { useBookContext } from "../hooks/useBookContext";
import { BookShow } from "./BookShow";
interface BookItem {
  id: string;
  title: string;
}

export function BookList() {
  const { books } = useBookContext();

  const renderedBooks = books.map(({ id, title }: BookItem) => {
    return <BookShow key={id} book={{ id, title }} />;
  });

  return (
    <div className="flex justify-between flex-wrap gap-5 mt-5">
      {renderedBooks}
    </div>
  );
}
