import axios from "axios";
import type { IBookCreate, IBookEntity } from "../entities/books";

const url = "http://localhost:3000/books";

export async function createBookService(
  data: IBookCreate
): Promise<IBookEntity> {
  const response = await axios.post<IBookEntity>(url, data);
  // console.log("createBookService: ", response.data);
  return response.data;
}
