import React from "react";

export default function Button(props) {

  const { type, name, className, onClick } = props;


    return (
    <button type={type} className={className} onClick={onClick}>{name}</button>
  )
}