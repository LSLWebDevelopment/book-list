import axios from "axios";
import type { IBookEntity } from "../entities/books";

const url = "https://book-list-back-end.onrender.com/books";
// const url = import.meta.env.VITE_API_URL;

export async function getBookListService(): Promise<IBookEntity[]> {
  const response = await axios.get<IBookEntity[]>(url);
  console.log(response.data);
  return response.data;
}
