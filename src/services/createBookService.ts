import axios from "axios";
import type { IBookCreate, IBookEntity } from "../entities/books";

const url = "https://book-list-back-end.onrender.com/books";
// const url = import.meta.env.VITE_API_URL;

export async function createBookService(
  data: IBookCreate
): Promise<IBookEntity> {
  const response = await axios.post<IBookEntity>(url, data);
  // console.log("createBookService: ", response.data);
  return response.data;
}
