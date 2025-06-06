import axios, { AxiosError } from "axios";
import type { BookEditEntity, BookCreateEntity } from "../entities/BookEntity";
import { editBookUrl } from "../env/listUrl";

export async function editBookService(book: BookEditEntity) {
  try {
    const response = await axios.patch(
      editBookUrl.replace(":id", book.id),
      book
    );
    console.log(response);
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log(err);
  }
}
