import React from "react";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb(props) {

  const { href, id, name } = props;

  const className = styles.link;

  return (
   
      <a className={className} href={href} id={id} >{name}</a>
  )
}