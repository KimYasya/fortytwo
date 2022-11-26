import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Like from "../../components/Like/Like";
import ActiveLike from "../../components/Like/ActiveLike"; 

import styles from "./HomePage.module.css";

export default function HomePage() {

  const [likeBtn, setLikeBtn] = useState(false);


  const handleClickLikeBtn = () => {
    setLikeBtn(!likeBtn);
  }



  return (
    <div className={styles.body}>
      <Header />


      <div className={styles.container}>

        <Breadcrumbs />

        <div className={styles.mainContainer}>

          <div className={styles.productChoice}>
            <img className={styles.productPreview} src="./img/image-1.webp" alt="изображение айфона анфас" />


            <div className={styles.productDescription}>
              <span className={styles.text}>Cмартфон Apple iPhone 13, синий
                [6.1, 128 ГБ, IOS 15, NFC, Bluetooth, Wi-Fi, Apple A15 Bionic] 173 г
              </span>

              <div className={styles.btns}>
                <Link className={`${styles.btn} ${styles.linkH}`} to="/product">Подробнее</Link>

                <div className={styles.likeHP} onClick={handleClickLikeBtn}>
                  {likeBtn ?
                    <ActiveLike />
                    :
                    <Like />
                  }

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )

}