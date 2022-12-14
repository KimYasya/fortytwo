import React from "react";
import { useState } from "react";
import "./ColorChoise.css";
import ColorButton from "./ColorButton";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../store/reducers/selectedItem-reducer";

export default function ColorChoise() {

  const [selectedButton, setSelectedButton] = useState("Синий");

  const imgs = [
    {
      id: 11,
      color: "Красный",
      src: "./img/color-1.webp",
    },
    {
      id: 12,
      color: "Зеленый",
      src: "./img/color-2.webp",
    },
    {
      id: 13,
      color: "Розовый",
      src: "./img/color-3.webp",
    },
    {
      id: 14,
      color: "Синий",
      src: "./img/color-4.webp",
    },
    {
      id: 15,
      color: "Белый",
      src: "./img/color-5.webp",
    },
    {
      id: 16,
      color: "Черный",
      src: "./img/color-6.webp",
    },
  ];

  const products = useSelector((store) => store.selectedItem.products);

  const currentSelectedItem =  products.some((prevProduct) => {
    return prevProduct === selectedButton;
  });

  const dispatch = useDispatch();


  const handleClickSelectedBtn = (item) =>{
    setSelectedButton(item);
    if (currentSelectedItem) {
      dispatch(removeProduct(selectedButton))
    } 
    dispatch(addProduct(item));
  }

  return (

    <div className="subsection">
      <div className="headers">
        <h4> Цвет товара: { selectedButton } </h4>
      </div>

      <div className="color">
        {imgs.map(function (img) {

          const selected = img.color === selectedButton;
          const className = selected ? "img_selected" : "img";

          return <ColorButton
            key={ img.id }
            className={ className }
            onClick={ ( ) => {handleClickSelectedBtn(img.color)} }
            src={ img.src }
          />
        })}
      </div>
    </div>
  )
}



 




 