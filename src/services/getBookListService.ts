import axios from "axios";
import type { IBookEntity } from "../entities/books";

// const url = "http://localhost:3000/books";
const url = import.meta.env.VITE_API_URL;

export async function getBookListService(): Promise<IBookEntity[]> {
  const response = await axios.get<IBookEntity[]>(url);
  console.log(response.data);
  return response.data;
}
