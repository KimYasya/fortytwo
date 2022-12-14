import React from "react";
import "./Preview.css";
import { useSelector } from "react-redux";

export default function Preview() {

  const previewStore = useSelector((store) => store.selectedItem.products);
  const preview = previewStore[0]
  console.log(preview)

  return (
    <>
      <div className={`product-preview ${preview === "Красный" ? "red" : ""}`}>
        <div className="product-preview__name">
          <span>Cмартфон Apple iPhone 13, красный</span>
        </div>

        <div className="product-preview__image">
          <img className="product-preview__image-s" src="./img/red-1.jpg" alt="красный айфон" />
          <img className="product-preview__image-s" src="./img/red-2.jpg" alt="красный айфон" />
          <img className="product-preview__image-s" src="./img/red-3.jpg" alt="красный айфон" />
          <img className="product-preview__image-s" src="./img/red-4.jpg" alt="красный айфон" />
          <img className="product-preview__image-s" src="./img/red-5.jpg" alt="красный айфон" />
        
        </div>
      </div>

      <div className={`product-preview ${preview === `Зеленый` ? "green" : ""}`}>
        <div className="product-preview__name">
          <span>Cмартфон Apple iPhone 13, зеленый</span>
        </div>

        <div className="product-preview__image">
          <img className="product-preview__image-s" src="./img/green-1.jpg" alt="зеленый айфон" />
          <img className="product-preview__image-s" src="./img/green-5.jpg" alt="зеленый айфон" />
          <img className="product-preview__image-s" src="./img/green-2.jpg" alt="зеленый айфон" />
          <img className="product-preview__image-s" src="./img/green-3.jpg" alt="зеленый айфон" />
          <img className="product-preview__image-s" src="./img/green-4.jpg" alt="зеленый айфон" />
        </div>
      </div>

      <div className={`product-preview ${preview === `Розовый` ? "pink" : ""}`}>
        <div className="product-preview__name">
          <span>Cмартфон Apple iPhone 13, розовый</span>
        </div>

        <div className="product-preview__image">
          <img className="product-preview__image-s" src="./img/pink-1.jpg" alt="розовый айфон" />
          <img className="product-preview__image-s" src="./img/pink-2.jpg" alt="розовый айфон" />
          <img className="product-preview__image-s" src="./img/pink-3.jpg" alt="розовый айфон" />
          <img className="product-preview__image-s" src="./img/pink-4.jpg" alt="розовый айфон" />
          <img className="product-preview__image-s" src="./img/pink-5.jpg" alt="розовый айфон" />
        
        </div>
      </div>

      <div className={`product-preview ${preview === undefined ? "blueState" : "" } ${preview === `Синий` ? "blue" : ""}`}>
        <div className="product-preview__name">
          <span>Cмартфон Apple iPhone 13, синий</span>
        </div>

        <div className="product-preview__image">
        <img className="product-preview__image-s" src="./img/image-1.webp" alt="синий айфон" />
        <img className="product-preview__image-s" src="./img/image-2.webp" alt="синий айфон" />
        <img className="product-preview__image-s" src="./img/image-3.webp" alt="синий айфон" />
        <img className="product-preview__image-s" src="./img/image-4.webp" alt="синий айфон" />
        <img className="product-preview__image-s" src="./img/image-5.webp" alt="синий айфон" />
        
        </div>
      </div>

      <div className={`product-preview ${preview === `Белый` ? "white" : ""}`}>
        <div className="product-preview__name">
          <span>Cмартфон Apple iPhone 13, белый</span>
        </div>

        <div className="product-preview__image">
          <img className="product-preview__image-s" src="./img/white-1.jpg" alt="белый айфон" />
          <img className="product-preview__image-s" src="./img/white-2.jpg" alt="белый айфон" />
          <img className="product-preview__image-s" src="./img/white-3.jpg" alt="белый айфон" />
          <img className="product-preview__image-s" src="./img/white-4.jpg" alt="белый айфон" />
          <img className="product-preview__image-s" src="./img/white-5.jpg" alt="белый айфон" />
        
        </div>
      </div>

      <div className={`product-preview ${preview === `Черный` ? "black" : ""}`}>
        <div className="product-preview__name">
          <span>Cмартфон Apple iPhone 13, черный</span>
        </div>

        <div className="product-preview__image">
          <img className="product-preview__image-s" src="./img/black-1.jpg" alt="черный айфон" />
          <img className="product-preview__image-s" src="./img/black-2.jpg" alt="черный айфон" />
          <img className="product-preview__image-s" src="./img/black-3.jpg" alt="черный айфон" />
          <img className="product-preview__image-s" src="./img/black-4.jpg" alt="черный айфон" />
          <img className="product-preview__image-s" src="./img/black-5.jpg" alt="черный айфон" />
        
        </div>
      </div>
    </>
  )
}
