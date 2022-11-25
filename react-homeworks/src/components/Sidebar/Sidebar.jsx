import React from "react";
import { useState } from "react";
import "./Sidebar.css"
import Button from "../Button";
import Like from "../Like/Like";
import ActiveLike from "../Like/ActiveLike"; 

export default function Sidebar() {

  const [sidebarBtnIsActive, setSidebarBtnIsActive] = useState(false);
  const [sidebarLike, setSidebarLike] = useState(false);

  const sidebarBtnClasses = sidebarBtnIsActive ? "active-sidebar_btn" : "sidebar__button_buy";

  const handleClicksidebarBtn = () => {
    setSidebarBtnIsActive(!sidebarBtnIsActive);
  };

  const handleClickSidebarLike = () => {
    setSidebarLike(!sidebarLike);
  }

  return (
    <div className="sidebar">

      <div className="sidebar__buy">
        <div className="sidebar__first-line">
          <div className="sidebar__old-price">
            <div className="sidebar__cost1">
              <span>75 990₽</span>
            </div>

            <div className="sidebar__discount">
              <span>-8%</span>
            </div>
          </div>

          <div className="sidebar__like" onClick={handleClickSidebarLike}>
            {sidebarLike ?

            <ActiveLike />
              :
            <Like />
        
            }

          </div>
        </div>

        <div className="sidebar__cost2">
          <span>67 990₽</span>
        </div>

        <div className="sidebar__delivery">
          <span>Самовывоз в четверг, 1 сентября — <b>бесплатно</b></span>
          <p>Курьером в четверг, 1 сентября — <b>бесплатно</b></p>

          <Button
            type={`submit`}
            className={sidebarBtnClasses}
            onClick={handleClicksidebarBtn}
            name={sidebarBtnIsActive ? "Товар добавлен" : "Добавить в корзину"}
          >{}
          </Button>

        </div>
      </div>

      <div className="sidebar__frame">
        <span>Реклама</span>
        <iframe className="sidebar__framelook" src="../frames/VanGog.html" title="add-frame-one">
        </iframe>
        <iframe className="sidebar__framelook1" src="../frames/VanGog.html" title="add-frame-two">
        </iframe>
      </div>

    </div>
  )
}