import axios, { AxiosError } from "axios";
import { deleteBookUrl } from "../env/listUrl";

export async function deleteBookService(id: string) {
  try {
    const response = await axios.delete(deleteBookUrl.replace(":id", id));
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log(err);
  }
}
