import React from "react";

export default function ColorButton(props) {

  const { id, color, src, selected, ...restProps } = props;

  return (
    <div className="choice">
      <button { ...restProps } id={ id } color={ color } src={ src } selected={ selected } >
        <img src={ src } alt="" height="60" />
      </button>
    </div>
  );
}