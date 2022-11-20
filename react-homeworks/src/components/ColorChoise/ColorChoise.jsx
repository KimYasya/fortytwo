import { useState } from "react";
import "./ColorChoise.css";
import ColorButton from "./ColorButton";

export default function ColorChoise() {

  const [activedButton, setActivedButton] = useState("");

  const imgs = [
    {
      id: 1,
      color: "Красный",
      src: "./img/color-1.webp",
    },
    {
      id: 2,
      color: "Зеленый",
      src: "./img/color-2.webp",
    },
    {
      id: 3,
      color: "Розовый",
      src: "./img/color-3.webp",
    },
    {
      id: 4,
      color: "Синий",
      src: "./img/color-4.webp",
    },
    {
      id: 5,
      color: "Белый",
      src: "./img/color-5.webp",
    },
    {
      id: 6,
      color: "Черный",
      src: "./img/color-6.webp",
    },
  ];

  return (

    <div className="subsection">
      <div className="headers">
        <h4> Цвет товара: { activedButton } </h4>
      </div>

      <div className="color">
        {imgs.map(function (img) {
          const actived = img.color === activedButton;
          return <ColorButton
            key={ img.id }
            className={ `img ${actived ? "selected" : ""}` }
            onClick={ () => { setActivedButton(img.color) } }
            src={ img.src }
          />
        })}
      </div>
    </div>
  )
}



 




 