import React from "react";
import "./Breadcrumb.css";

export default function Breadcrumb(props) {

  const { href, id, name } = props;

  const className = "link";

  return (
   
      <a className={className} href={href} id={id} >{name}</a>
  )
}