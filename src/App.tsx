import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";

export function App() {
  // const { bookList } = useBookContext();

  // useEffect(() => {
  //   bookList();
  // }, []);

  return (
    <div className="m-5">
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
