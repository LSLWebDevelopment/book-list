import axios from "axios";
import type { IBookEdition } from "../entities/books";

const url = "http://localhost:3000/books";

export async function editBookService(
  data: IBookEdition
): Promise<IBookEdition> {
  const response = await axios.put<IBookEdition>(`${url}/${data.id}`, {
    title: data.title,
  });

  return response.data;
}
