import { useState, type ChangeEvent, type FormEvent } from "react";
import { fetchImage } from "../services/getBookImageService";
import { ListBookImages } from "./ListBookImages";

export function ListBookImagesModal() {
  const [imageName, setImage] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetchImage(imageName);
    setImages(response);
  };

  return (
    <>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div>
          <h3 className="mb-5">Choose an image to add to your book list</h3>
          <label htmlFor="imageName">Search Image: </label>
          <input
            type="text"
            name="imageName"
            id="imageName"
            className="border-2  py-1.5 px-3"
            value={imageName}
            onChange={handleImageChange}
          />
          <button className="border-2 bg-gray-400 py-1.5 px-3">Submit</button>
        </div>
      </form>
      <ListBookImages images={images} />
    </>
  );
}
