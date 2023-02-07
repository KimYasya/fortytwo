import React from "react";
import styles from "./HeaderLOTOS.module.css";

export default function Header() {

  return (
    <div>
      <div className="container">
        <p className={styles.header}>Ход торгов <b>Тестовые торги</b></p>
      </div>
    </div>
  )
}