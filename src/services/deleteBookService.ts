import axios from "axios";
import type { IBookEntity } from "../entities/books";

const url = "https://book-list-back-end.onrender.com/books";
// const url = import.meta.env.VITE_API_URL;

export async function deleteBookService(id: string): Promise<IBookEntity> {
  const response = await axios.delete<IBookEntity>(`${url}/${id}`);
  return response.data;
}
