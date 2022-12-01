import React from "react";
import { useState } from "react";
import "./ConfigList.css";
import ConfigButton from "./ConfigButton";

export default function ConfigList() {

  const memoryButtons = [ 
    {
      id: 1,
      memory: "128 Гб",
    },

    {
      id: 2,
      memory: "256 Гб",
    },
    {
      id: 3,
      memory: "512 Гб",
    },
  ];

  const [activedButton, setActivedButton] = useState("128 Гб");

  return (
    <div className="product-info__subsection">
      <div className="headers">
        <h4> {`Конфигурация памяти: ${ activedButton }`}</h4>
      </div>

      <div className="product-info__buttons">
        {memoryButtons.map(function (memoryButton) {

          const actived = memoryButton.memory === activedButton;
          const className = actived ? "activedBtn" : "btn";
          
          return <ConfigButton
                    key={ memoryButton.id }
                    className={ className }
                    onClick={() => { setActivedButton(memoryButton.memory) }}
                    memory= { memoryButton.memory }
                 />
        })}
      </div>
    </div>
  )
}  

