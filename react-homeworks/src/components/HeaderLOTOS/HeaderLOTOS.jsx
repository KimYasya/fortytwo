import React from "react";
import styles from "./HeaderLOTOS.module.css";

export default function Header() {

  return (
    <div>
      <div>
        <p className={styles.header}>Ход торгов <b>Тестовые торги на аппарат ЛОТОС</b></p>
      </div>
    </div>
  )
}