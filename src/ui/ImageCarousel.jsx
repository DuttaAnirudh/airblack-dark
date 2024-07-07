import { useState, useEffect } from "react";

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1); // Start from the first real image
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleTransitionEnd = () => {
    if (currentImageIndex === images.length + 1) {
      setIsTransitioning(false);
      setCurrentImageIndex(1); // Jump back to the first real image
    } else if (currentImageIndex === 0) {
      setIsTransitioning(false);
      setCurrentImageIndex(images.length); // Jump back to the last real image
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50); // Re-enable transition after the jump
    }
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 2000); // Change image every 1 seconds

    return () => clearInterval(interval);
  }, []);

  const extendedImages = [images[images.length - 1], ...images, images[0]];

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className={`flex transition-transform duration-1000 ease-in-out h-full ${
          !isTransitioning ? "transition-none" : ""
        }`}
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((image, index) => (
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
