interface ListBookImagesProps {
  images: string[];
  onImageChosen: (img: string) => void;
  onModalClosed: () => void;
}

export function ListBookImages({
  images,
  onImageChosen,
  onModalClosed,
}: ListBookImagesProps) {
  const handleImageChosen = (img: string) => {
    onImageChosen(img);
    onModalClosed();
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
