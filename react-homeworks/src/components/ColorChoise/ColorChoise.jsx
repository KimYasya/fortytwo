import { useState } from "react";
import "./ColorChoise.css";

export default function ColorChoise() {

  let [activedButton, setActivedButton] = useState("");

  return (
    <div className="subsection">
      <div className="headers">
        <h4> {`Цвет товара: ${activedButton}`} </h4>
      </div>

      <div className="color">
        
        <Imgs />

      </div>
    
    </div>
  )

 function Imgs() {
    const imgs = [
      {
        color: "Красный",
        src: "./img/color-1.webp",
      },
      {
        color: "Зеленый",
        src: "./img/color-2.webp",
      },
      {
        color: "Розовый",
        src: "./img/color-3.webp",
      },
      {
        color: "Синий",
        src: "./img/color-4.webp",
      },
      {
        color: "Белый",
        src: "./img/color-5.webp",
      },
      {
        color: "Черный",
        src: "./img/color-6.webp",
      },
    ];

    return (
      <div className="choice">
        {imgs.map(function(img) {
          let actived = img.color === activedButton;
          let className = `img ${actived ? "actived" : ""}`;
            return (
              <button className = { className } onClick = { () => {
                setActivedButton(img.color);
              }}
                >
                <img src={`${img.src}`} alt="" height="60" />
              </button>
            );
            }
          )
        }
      </div>
    );
  }
}






 