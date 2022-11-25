import React from "react";
import { useCurrentDate } from "@kundinos/react-hooks";
import "./Footer.css";

export default function Footer() {

  const currentDate = useCurrentDate();
  const fullYear = currentDate.getFullYear();

  return (

    <footer>
      <div className="footer">
        <div className="container footer__container">
          <div className="footer__info">
            <p className="footer__copyright copyright-bold">© ООО «<span className="footer__page-classname">Мой</span>{`Маркет», 2018-${fullYear}`}.</p>
            <p className="footer__copyright">Для уточнения информации звоните по номеру <a className="link" href="tel:+79000000000">+7 900 000 0000</a>, <br />
              а предложения по сотрудничеству отправляйте на почту <a className="link" href="mailto:partner@mymarket.com">partner@mymarket.com</a></p>
          </div>

          <div><a className="link" href="#top">Наверх</a></div>
        </div>
      </div>
    </footer>

  )
}