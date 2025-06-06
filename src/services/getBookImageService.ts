import axios from "axios";
import type {
  BookImageListResponse,
  BookImageResponse,
} from "../entities/BookEntity";

export async function fetchImage(imageTitle: string): Promise<string> {
  const searchEngineId = "e32636db426d6487e";
  const apiKey = "AIzaSyDORl1S1YOGf7Dk4c5O0-a8ZjNjedZA4p8";
  const response = await axios.get<BookImageListResponse>(
    `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${imageTitle}&searchType=image`
  );

  const image: string[] = response.data.items.map((img: BookImageResponse) => {
    return img.link;
  });

  return image[0];
}
