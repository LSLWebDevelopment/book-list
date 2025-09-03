import axios from "axios";
import type { IBookEntity } from "../entities/books";

const url = "http://localhost:3000/books";

export async function deleteBookService(id: string): Promise<IBookEntity> {
  const response = await axios.delete<IBookEntity>(`${url}/${id}`);
  return response.data;
}
