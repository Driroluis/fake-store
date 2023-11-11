import React, { useState } from "react";

const images = [
  "../../../img/1.jpg",
  "../../../img/2.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="relative min-h-[37.5vh] flex">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          width={1920}
          height={1080}
          className={`absolute object-cover w-full h-full opacity-75 -z-10 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="container flex items-center justify-center px-2 mx-auto">
        <div className="absolute left-0 right-0 flex justify-center bottom-10">
          <button
            onClick={prevImage}
            className="px-4 py-2 mr-2 font-bold text-white bg-yellow-600 rounded-md hover:bg-gray-700"
          >
            Anterior
          </button>
          <button
            onClick={nextImage}
            className="px-4 py-2 font-bold text-white bg-yellow-600 rounded-md hover:bg-gray-700"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
