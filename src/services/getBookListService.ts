import axios from "axios";
import type { BookEntity, BookResponseEntity } from "../entities/BookEntity";
import { listBooksUrl } from "../env/listUrl";

export async function getBookListService(): Promise<BookEntity[]> {
  const response = await axios.get<BookResponseEntity[]>(listBooksUrl);

  const data: BookEntity[] = response.data.map((book: BookResponseEntity) => {
    return {
      id: book.id,
      img: book.img,
      title: book.title,
    };
  });

  return data;
}
