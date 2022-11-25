import React from "react";
import "./Table.css";

export default function Table() {

  return (

    <div className="table-block">
      <table className="table-block__table">
        <caption className="table-block__title">Сравнение моделей</caption>
        <thead>
          <tr>
            <th className="table-block__elements">Модель</th>
            <th className="table-block__elements">Вес</th>
            <th className="table-block__elements">Высота</th>
            <th className="table-block__elements">Ширина</th>
            <th className="table-block__elements">Толщина</th>
            <th className="table-block__elements">Чип</th>
            <th className="table-block__elements">Объём памяти</th>
            <th className="table-block__elements">Аккумулятор</th>
          </tr>
        </thead>

        <tbody>
          <tr className="table-block__tr_selection">
            <td className="table-block__elements table-bottom">Iphone11</td>
            <td className="table-block__elements table-bottom">194 грамма</td>
            <td className="table-block__elements table-bottom">150.9 мм</td>
            <td className="table-block__elements table-bottom">75.7 мм</td>
            <td className="table-block__elements table-bottom">8.3 мм</td>
            <td className="table-block__elements table-bottom">A13 Bionicchip</td>
            <td className="table-block__elements table-bottom">до 128 Гб</td>
            <td className="table-block__elements table-bottom">До 17 часов</td>
          </tr>

          <tr className="table-block__tr_selection">
            <td className="table-block__elements table-bottom">Iphone12</td>
            <td className="table-block__elements table-bottom">164 грамма</td>
            <td className="table-block__elements table-bottom">146.7 мм</td>
            <td className="table-block__elements table-bottom">71.5 мм</td>
            <td className="table-block__elements table-bottom">7.4 мм</td>
            <td className="table-block__elements table-bottom">A14 Bionicchip</td>
            <td className="table-block__elements table-bottom">до 256 Гб</td>
            <td className="table-block__elements table-bottom">До 19 часов</td>
          </tr>

          <tr className="table-block__tr_selection">
            <td className="table-block__elements table-bottom">Iphone13</td>
            <td className="table-block__elements table-bottom">174 грамма</td>
            <td className="table-block__elements table-bottom">146.7 мм</td>
            <td className="table-block__elements table-bottom">71.5 мм</td>
            <td className="table-block__elements table-bottom">7.65 мм</td>
            <td className="table-block__elements table-bottom">A15 Bionicchip</td>
            <td className="table-block__elements table-bottom">до 512 Гб</td>
            <td className="table-block__elements table-bottom">До 19 часов</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}