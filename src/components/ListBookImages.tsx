import { useState } from "react";

interface ListBookImagesProps {
  images: string[];
}

export function ListBookImages({ images }: ListBookImagesProps) {
  const [imageLink, setImageLink] = useState("");

  const handleImageChosen = (img: string) => {
    console.log("Link: ", img);
  };

  const renderedImage = images.map((image: string, index: number) => {
    return (
      <figure
        className="w-70"
        key={index}
        onClick={() => handleImageChosen(image)}
      >
        <img src={image} alt={image} />
      </figure>
    );
  });

  return (
    <div className="flex justify-between items-center flex-wrap">
      {renderedImage}
    </div>
  );
}
