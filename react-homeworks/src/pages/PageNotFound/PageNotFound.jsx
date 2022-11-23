import React from "react";
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "./PageNotFound.css";

export default function PageNotFound() {

  return (
    <>
      <Header />


      <div className="container">


        <div className="main_container">

          <img src="./img/i want to believe.png" alt="i want to believe" />
          <span className="main_nopage">But there is no page here</span>
          <span className="main_sorry">Sorry</span>
          <Link to="/" className="main_link">Try the home page</Link>


        </div>

      </div>
      <Footer />
    </>
  )

}