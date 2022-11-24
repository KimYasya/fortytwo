import React from "react";
import "./RaitingList.css";

export default function RaitingList(props) {

  const { id } = props;

  return (
    
      <img id={id} className="rait__img" src="./img/star.png" alt="звезда" />
   
  )
}  