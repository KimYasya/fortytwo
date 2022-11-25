import React from "react";
import "./RaitingFive.css";

export default function RaitingList(props) {

  const { id } = props;

  return (
    <div>
      <img id={id} className="rait__img" src="./img/star.png" alt="звезда" />
      <img id={id} className="rait__img" src="./img/star.png" alt="звезда" />
      <img id={id} className="rait__img" src="./img/star.png" alt="звезда" />
      <img id={id} className="rait__img" src="./img/star.png" alt="звезда" />
      <img id={id} className="rait__img" src="./img/star.png" alt="звезда" />
    </div>

  )
}  