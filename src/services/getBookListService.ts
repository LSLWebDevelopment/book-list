import axios from "axios";
import type {
  BookListEntity,
  BookResponseEntity,
} from "../entities/BookEntity";
import { listBooksUrl } from "../env/listUrl";

export async function getBookListService(): Promise<BookListEntity[]> {
  const response = await axios.get<BookResponseEntity[]>(listBooksUrl);

  const data: BookListEntity[] = response.data.map(
    (book: BookResponseEntity) => {
      return {
        id: book.id,
        img: book.img,
        title: book.title,
      };
    }
  );

  return data;
}
