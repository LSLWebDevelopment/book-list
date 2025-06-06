import axios from "axios";
import type { BookEntity, BookResponseEntity } from "../entities/BookEntity";
import { createBookUrl } from "../env/listUrl";

export async function createBookService(book: BookEntity): Promise<BookEntity> {
  const response = await axios.post<BookResponseEntity>(createBookUrl, book);
  console.log("Response: ", response);
  return response.data;
}
