import React from "react";
import "./Features.css";

export default function Features() {

  return(
    
    <div className="product-info__subsection">
      <div className="headers">
        <h4>Характеристики товара</h4>
      </div>

      <div className="list-style">
        <li>Экран: <b>6.1</b></li>
        <li>Встроенная память: <b>128 ГБ</b></li>
        <li>Операционная система: <b>IOS 15</b></li>
        <li>Беспроводные интерфейсы: <b>NFC, Bluetooth, Wi-Fi</b></li>
        <li>Процессор: <a className="link" href="https://ru.wikipedia.org/wiki/Apple_A15" target="_blank" rel="noopener noreferrer">Apple A15 Bionic</a></li>
        <li>Вес: 173 г</li>
      </div>

    </div>

  )
}