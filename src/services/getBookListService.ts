import axios from "axios";
import type { IBookEntity } from "../entities/books";

const url = "http://localhost:3000/books";

export async function getBookListService(): Promise<IBookEntity[]> {
  const response = await axios.get<IBookEntity[]>(url);
  return response.data;
}
