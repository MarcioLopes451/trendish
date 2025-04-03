import { useLocation } from "react-router-dom";

export function Gallery() {
  const { state } = useLocation();
  const images = state?.images || [];

  return (
    <div className="p-4 mx-auto lg:w-[846px]">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-3  gap-4 w-full  ">
        {images.map((image: string, index: number) => (
          <img
            key={index}
            src={image}
            alt={`Gallery photo ${index + 1}`}
            className="w-full h-64 object-cover"
          />
        ))}
      </div>
    </div>
  );
}