import axios from "axios";
import type { IBookEdition } from "../entities/books";

// const url = "https://book-list-back-end.onrender.com/books";
const url = import.meta.env.VITE_EDIT_API_URL;

export async function editBookService(
  data: IBookEdition
): Promise<IBookEdition> {
  const response = await axios.patch<IBookEdition>(
    `${url.replace(":id", data.id)}`,
    data
  );
  console.log(response.data);
  return response.data;
}
