import React from "react";

export default function ConfigButton(props) {

  const { id, memory, actived, ...restProps } = props;


  return (

    <button { ...restProps } id={ id } memory={ memory } actived={ actived } >
      { memory }
    </button>
  )
}