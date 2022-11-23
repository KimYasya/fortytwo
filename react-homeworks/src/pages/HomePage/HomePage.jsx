import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "./HomePage.css";

export default function HomePage() {

  const [likeBtn, setLikeBtn] = useState(false);


  const handleClickLikeBtn = () => {
    setLikeBtn(!likeBtn);
  }



  return (
    <>
      <Header />


      <div className="container">

        <Breadcrumbs />

        <div className="main_container">

          <div className="product-choise">
            <img className="product_preview" src="./img/image-1.webp" alt="изображение айфона анфас" />


            <div className="product_description">
              <span className="product_description_text">Cмартфон Apple iPhone 13, синий
                [6.1, 128 ГБ, IOS 15, NFC, Bluetooth, Wi-Fi, Apple A15 Bionic] 173 г
              </span>

              <div className="product_description_btns">
                <Link className="product_description_btn link_h" to="/product">Подробнее</Link>

                <div className="sidebar__like" onClick={handleClickLikeBtn}>
                  {likeBtn ?
                    <svg width="28" height="22" viewBox="0 0 28 22">
                      <path d="m 1.7952743,1.7234655 c 2.3937,-2.29795401 6.26159,-2.29795401 8.6552797,0 l 2.5598,2.45748 2.5599,-2.45748 
            c 2.3937,-2.29795401 6.2616,-2.29795401 8.6554,0 2.3936,2.29795 2.3936,6.01111 0,8.3091095 l -11.2153,10.7665 
            -11.2150797,-10.7665 c -2.39369904,-2.2979995 -2.39369904,-6.0111595 0,-8.3091095 z m 6.88751,1.69705 c -1.41738,
            -1.36069 -3.70235,-1.36069 -5.11975,0 -1.41738,1.36069 -1.41738,3.55427 0,4.91502 l 9.4473197,9.0694395 9.4475,
            -9.0694395 c 1.4174,-1.36075 1.4174,-3.55433 0,-4.91502 -1.4174,-1.36069 -3.7024,-1.36069 -5.1197,0 l -4.3278,4.15458 z"
                        fill="#F36223"
                      />
                      <path d="M 7.7304052,12.678189 C 1.900041,7.078087 2.1557048,7.3490596 1.8320586,6.4266572 1.6769744,5.9846617 
            1.6714622,5.9465614 1.6705366,5.3102305 1.6697134,4.7442198 1.6845808,4.6036397 1.7760799,4.3122514 2.2282189,2.8723671 
            3.3830955,1.8642309 4.8801033,1.6026298 5.9453098,1.4164857 7.1566675,1.719301 7.9788469,2.3772542 c 0.157776,0.126261 
            1.3451794,1.2467522 2.6386741,2.4899803 1.293496,1.2432282 2.370279,2.2604148 2.392851,2.2604148 0.02258,0 1.139958,
            -1.0553778 2.483076,-2.3452838 1.343116,-1.2899061 2.554482,-2.4218587 2.691924,-2.5154505 0.370101,-0.2520211 
            0.764497,-0.4393935 1.213282,-0.5764152 0.35883,-0.1095565 0.469331,-0.1219155 1.081209,-0.1209282 0.605706,9.774e-4 
            0.726002,0.014554 1.081211,0.1220279 1.272568,0.3850349 2.219743,1.2740407 2.634096,2.4723261 0.112002,0.3239122 
            0.141192,0.4931478 0.159222,0.9231827 0.01302,0.3105144 -1.82e-4,0.6544103 -0.03218,0.8381581 -0.106527,0.6117182 
            -0.434337,1.2863273 -0.851182,1.7516606 -0.27,0.3014081 -10.41456,10.037187 -10.458622,10.037187 -0.02146,0 -2.398353,
            -2.266167 -5.2819973,-5.035925 z"
                        fill="#F36223"
                      />
                    </svg>
                    :
                    <svg width="28" height="22" viewBox="0 0 28 22">
                      <path d="M2.78502 2.57269C5.17872 0.27474 9.04661 0.27474 11.4403 2.57269L14.0001 5.03017L16.56 2.57269C18.9537 0.27474 22.8216 0.27474 25.2154 2.57269C27.609 4.87064 27.609 8.5838 25.2154 10.8818L14.0001 21.6483L2.78502 10.8818C0.391321 8.5838 0.391321 4.87064 2.78502 2.57269ZM9.67253 4.26974C8.25515 2.90905 5.97018 2.90905 4.55278 4.26974C3.1354 5.63044 3.1354 7.82401 4.55278 9.18476L14.0001 18.2542L23.4476 9.18476C24.865 7.82401 24.865 5.63044 23.4476 4.26974C22.0302 2.90905 19.7452 2.90905 18.3279 4.26974L14.0001 8.42432L9.67253 4.26974Z" />
                    </svg>
                  }

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )

}