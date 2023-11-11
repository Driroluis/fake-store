/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const Characters = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000); 

    return () => {
      clearInterval(interval); 
    };
  }, []);

  return (
    <section className="py-8">
      <div className="container flex flex-col gap-8 px-2 mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-slate-950">Productos</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] gap-6">
          {data?.map((element, index) => {
            const { id, title, price, description, images, category } = element;

            return (
              <div key={id} className="flex flex-col overflow-hidden rounded-2xl">
                <img
                  src={images[currentImageIndex]}
                  alt={title}
                  width={256}
                  height={256}
                  className="object-cover w-full h-64"
                />
                <div className="flex flex-col gap-2 p-4 bg-slate-950">
                  <h3 className="text-2xl font-bold text-amber-900"> {title} </h3>
                  <h4>
                    <span className="font-bold">Categoria:</span> {category.name}
                  </h4>
                  <h4 className="text-base font-bold"> ${price} </h4>
                  <p> {description} </p>
                  <div className="self-start px-8 py-2 mt-auto font-semibold transition-colors bg-yellow-600 rounded-2xl hover:bg-amber-950 hover:text-white">Añadir al carrito 🛒</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Characters;
