import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs() {

  const links = [
    {
      id: 1,
      name: "Электроника",
      href: "http://localhost:3000",
    },
    {
      id: 2,
      name: "Смартфоны и гаджеты",
      href: "http://localhost:3000",
    },
    {
      id: 3,
      name: "Мобильные телефоны",
      href: "http://localhost:3000",
    },
    {
      id: 4,
      name: "Apple",
      href: "http://localhost:3000",
    },
  ]

  const className = styles.link;

  return (
    <nav>
      <div className={styles.breadcrumbs}>
       
        {links.map(function (link) {
          return <div key={ link.id }> 
            <Breadcrumb 
              className={ className }
              href={ link.href }
              name={ link.name }
            />
            <span className={ `${styles.separator} ${link.id === links.length ? `${styles.hidden}` : ""}`}>{">"}</span>  
            </div>
           })}
      </div>
    </nav>

  )
}

