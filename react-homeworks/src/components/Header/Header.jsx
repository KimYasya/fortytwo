import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

export default function Header() {

  const count = useSelector((store) => store.cart.products.length);

  
  return (
    <header className="header-container">
      <div className="container header__container">
        <div className="header">
          <div>
            <img src="./img/favicon.svg" alt="лого" height="35" />
          </div>
          <div className="header_style">
            <Link to='/' className="header_link"><span style={{color: "#f52"}}>Мой</span>Маркет</Link>
          </div>
        </div>

        <div className="header__like">
          <div className="header__like-style">
            <svg viewBox="0 0 28 22">
              <path d="M2.78502 2.57269C5.17872 0.27474 9.04661 0.27474 11.4403 2.57269L14.0001 5.03017L16.56 2.57269C18.9537 0.27474 22.8216 0.27474 25.2154 2.57269C27.609 4.87064 27.609 8.5838 25.2154 10.8818L14.0001 21.6483L2.78502 10.8818C0.391321 8.5838 0.391321 4.87064 2.78502 2.57269ZM9.67253 4.26974C8.25515 2.90905 5.97018 2.90905 4.55278 4.26974C3.1354 5.63044 3.1354 7.82401 4.55278 9.18476L14.0001 18.2542L23.4476 9.18476C24.865 7.82401 24.865 5.63044 23.4476 4.26974C22.0302 2.90905 19.7452 2.90905 18.3279 4.26974L14.0001 8.42432L9.67253 4.26974Z" />
            </svg>
          </div>

          <div className="header__like-circle">
            <span className="header__like-count">10</span>
          </div>
        </div>

        <div className="header__cart">
          <div className="header__cart-style">
            <svg viewBox="0 0 21 20">
              <path d="M0.799683 0.839233H4.30233H5.12213L5.28291 1.61096L5.74024 3.80618H19.3431H20.5235L20.3295 4.924L19.2993 10.8579L19.16 11.66H18.3129H7.37647L7.80062 13.696H18.3129V15.616H6.98081H6.16101L6.00023 14.8443L3.93985 4.95445L4.92044 4.76618L3.93985 4.95445L3.48252 2.75923H0.799683V0.839233ZM6.14024 5.72618L6.97647 9.74005H17.4658L18.1626 5.72618H6.14024ZM9.6758 18.0054C9.6758 18.8889 8.9316 19.6034 8.01119 19.6034C7.09075 19.6034 6.34656 18.8889 6.34656 18.0054C6.34656 17.1218 7.09075 16.4261 8.01119 16.4261C8.9316 16.4261 9.6758 17.1218 9.6758 18.0054ZM16.2534 19.6034C17.1738 19.6034 17.918 18.8889 17.918 18.0054C17.918 17.1218 17.1738 16.4261 16.2534 16.4261C15.3329 16.4261 14.5887 17.1218 14.5887 18.0054C14.5887 18.8889 15.3329 19.6034 16.2534 19.6034Z" />
            </svg>
          </div>

          <div className="header__cart-circle" id="header-count">
            <span className="header__cart-count">{count}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
