import { useState, useEffect, useRef } from "react";

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const extendedImages = useRef(images);

  useEffect(() => {
    const cloneArray = () => {
      extendedImages.current = [...extendedImages.current, ...images];
    };

    const intervalId = setInterval(cloneArray, 6000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images]);

  // Effect to handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className={`flex transition-transform duration-1000 ease-in-out h-full`}
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {extendedImages.current.map((image, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 h-full bg-cover bg-center`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
