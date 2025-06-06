import axios from "axios";
import type {
  BookCreateEntity,
  BookEntity,
  BookResponseEntity,
} from "../entities/BookEntity";
import { createBookUrl } from "../env/listUrl";

export async function createBookService(book: BookCreateEntity): Promise<void> {
  await axios.post<BookResponseEntity>(createBookUrl, book);
}
