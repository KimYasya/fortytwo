import React from "react";
import "./Preview.css";

export default function Preview() {

  const imgs = [
    {
      id: 1,
      src: "./img/image-1.webp",
      alt: "изображение айфона анфас"
    },
    {
      id: 2,
      src: "./img/image-2.webp",
      alt: "изображение айфона три четверти",
    },
    {
      id: 3,
      src: "./img/image-3.webp",
      alt: "изображение айфона три четвертых",
    },
    {
      id: 4,
      src: "./img/image-4.webp",
      alt: "изображение айфона камера",
    },
    {
      id: 5,
      src: "./img/image-5.webp",
      alt: "изображение айфона",
    }
  ]

  return (

    <div className="product-preview">
      <div className="product-preview__name">
        <span>Cмартфон Apple iPhone 13, синий</span>
      </div>

      <div className="product-preview__image">
        {imgs.map(function (img) {
          return <img className="product-preview__image-s"
                      key={img.id}
                      src={img.src}
                      alt={img.alt}
                  />
        })}
      </div>
    </div>
  )
}
