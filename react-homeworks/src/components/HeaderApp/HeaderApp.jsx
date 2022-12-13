import React from "react";
import { Link } from "react-router-dom";
import "./HeaderApp.css";

export default function HeaderApp(props) {

  const { text, textTwo, contactOne, contactTwo } = props;
  
  return (

    <header className="header-containerApp">
      <div className="container header__containerApp">
        <div className="header">
        
          <img src="./img/task-list-svgrepo-com.svg" alt="лого" height="35" />
          
          <div className="header__style">
            <Link to='/' className="header_link" style={{color: "#5E81FE"}}><span style={{color: "#757E9A"}}>{text}</span>{textTwo}</Link>

            <div className="header__contacts">
              {contactOne}
              {contactTwo}
            </div>
          </div>
        </div>

       
      </div>
    </header>

  )
}
