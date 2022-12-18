import React from "react";
import styles from "./AboutMe.module.css";

export default function AboutMe() {

  return (
    <div className={styles.aboutMe}>
      <div>
        <img className={styles.myPhoto} src="./img/myphoto.png" alt="YanaKim"/>
      </div>

      <div className={styles.text}> 
        <p>Привет, меня зовут Яна Ким. Я - начинающий frontend-разработчик. Представляю вашему вниманию мой сайт-визитку. 
           Постепенно он будет пополняться моими работами по мере того, как я буду наращивать опыт. </p>
        <p>Сейчас полностью увлечена изучением новой профессии. Интересуюсь чтением, рукоделием, bjd-куклами.</p>
        <p>Люблю животных и учиться.</p>
      </div>
    </div>
  )
}