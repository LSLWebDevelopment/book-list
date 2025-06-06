import axios from "axios";

export async function fetchImage(imageTitle: string) {
  const searchEngineId = "e32636db426d6487e";
  const apiKey = "AIzaSyDORl1S1YOGf7Dk4c5O0-a8ZjNjedZA4p8";
  const response = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${imageTitle}&searchType=image`
  );
  return response.data.items[0].link;
}
