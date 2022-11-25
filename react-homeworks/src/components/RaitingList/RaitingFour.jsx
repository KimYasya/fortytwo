import React from "react";
import "./RaitingFour.css";

export default function RaitingList(props) {

  const { id } = props;

  return (
    <div>
      <img id={id} className="raiting__img" src="./img/star.png" alt="звезда" />
      <img id={id} className="raiting__img" src="./img/star.png" alt="звезда" />
      <img id={id} className="raiting__img" src="./img/star.png" alt="звезда" />
      <img id={id} className="raiting__img" src="./img/star.png" alt="звезда" />
      <img id={id} className="raiting__img" src="./img/g star.png" alt="звезда" />
    </div>
  )
}  