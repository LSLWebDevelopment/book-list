import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { fetchImage } from "../services/getBookImageService";
import { ListBookImages } from "./ListBookImages";
import ReactDOM from "react-dom";

interface ListBookImagesModalProps {
  onImageChosen: (img: string) => void;
  onModalClosed: () => void;
}

export function ListBookImagesModal({
  onImageChosen,
  onModalClosed,
}: ListBookImagesModalProps) {
  const [imageName, setImage] = useState("");
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetchImage(imageName);
    setImages(response);
  };

  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed inset-20 overflow-auto  p-10 bg-amber-200">
        <form className="mt-5" onSubmit={handleSubmit}>
          <div>
            <div className="flex justify-between">
              <h3 className="mb-5 font-bold text-4xl text-amber-600">
                Choose an image to add to your book list
              </h3>
              <button
                type="button"
                className="font-bold text-4xl text-amber-600"
                onClick={() => onModalClosed()}
              >
                X
              </button>
            </div>
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
        <ListBookImages
          images={images}
          onImageChosen={onImageChosen}
          onModalClosed={onModalClosed}
        />
      </div>
    </div>,
    document.querySelector(".modal-container")!
  );
}
