import ColorChoise from "../ColorChoise/ColorChoise";
import ConfigList from "../ConfigList/ConfigList";
import ReviewsList from "../ReviewsList/ReviewsList";
import "./PageProduct.css";

export default function PageProduct() {
  return (
    <div>
      {/* <header className="header-container">
        <div className="container header__container">
          <div className="header">
            <div>
              <img src="./img/favicon.svg" alt="лого" height="35" /> 
            </div>
            <div className="header_style">
              <span style={{color: "#f52"}}>Мой</span>Маркет
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
              <span className="header__cart-count">0</span>
            </div>
          </div>
        </div>
      </header> */}

      <div className="container">

        <nav>
          <div className="breadcrumbs">
            <a className="link" href="http://localhost:3000">Электроника</a>
            <span> {">"} </span>
            <a className="link" href="http://localhost:3000">Смартфоны и гаджеты</a>
            <span> {">"} </span>
            <a className="link" href="http://localhost:3000">Мобильные телефоны</a>
            <span> {">"} </span>
            <a className="link" href="http://localhost:3000">Apple</a>
          </div>
        </nav>

        <main>

          <div className="product-preview">
            <div className="product-preview__name">
              <span>Cмартфон Apple iPhone 13, синий</span>
            </div>

            <div className="product-preview__image">
              <img className="product-preview__image-s" src="./img/image-1.webp" alt="изображение айфона анфас" />
              <img className="product-preview__image-s" src="./img/image-2.webp" alt="изображение айфона три четверти" />
              <img className="product-preview__image-s" src="./img/image-3.webp" alt="изображение айфона три четвертых" />
              <img className="product-preview__image-s" src="./img/image-4.webp" alt="изображение айфона камера" />
              <img className="product-preview__image-s" src="./img/image-5.webp" alt="изображение айфона анфас" />
            </div>
          </div>

          <div className="product-about">
            <div className="product-info">

              <ColorChoise />
              
              {/* <div className="product-info__subsection">
                <div className="headers">
                  <h4>Цвет товара: Синий</h4>
                </div>

                <div className="product-info__color">
                  <div className="product-info__choice">
                    <img className="product-info__img" src="./img/color-1.webp" alt="" />
                  </div>

                  <div className="product-info__choice">
                    <img className="product-info__img" src="./img/color-2.webp" alt="" />
                  </div>

                  <div className="product-info__choice">
                    <img className="product-info__img" src="./img/color-3.webp" alt="" />
                  </div>

                  <div className="product-info__choice product-info__button_selected">
                    <img className="product-info__img" src="./img/color-4.webp" alt="" />
                  </div>

                  <div className="product-info__choice">
                    <img className="product-info__img " src="./img/color-5.webp" alt="" />
                  </div>

                  <div className="product-info__choice">
                    <img className="product-info__img" src="./img/color-6.webp" alt="" />
                  </div>
                </div>

              </div> */}

              <ConfigList />

              {/* <div className="product-info__subsection">
                <div className="headers">
                  <h4>Конфигурация памяти: 128 ГБ</h4>
                </div>

                <div className="product-info__buttons">
                  <button className="product-info__button_selected">128 ГБ</button>
                  <button>256 ГБ</button>
                  <button>512 ГБ</button>
                </div>
              </div> */}

              <div className="product-info__subsection">
                <div className="headers">
                  <h4>Характеристики товара</h4>
                </div>

                <div className="list-style">
                  <li>Экран: <b>6.1</b></li>
                  <li>Встроенная память: <b>128 ГБ</b></li>
                  <li>Операционная система: <b>IOS 15</b></li>
                  <li>Беспроводные интерфейсы: <b>NFC, Bluetooth, Wi-Fi</b></li>
                  <li>Процессор: <a className="link" href="https://ru.wikipedia.org/wiki/Apple_A15" target="_blank" rel="noreferrer">Apple A15 Bionic</a></li>
                  <li>Вес: 173 г</li>
                </div>

              </div>

              <div className="product-info__subsection">
                <div className="headers">
                  <h4>Описание</h4>
                </div>

              <div className="product-info__description">
                  <div>
                    Наша самая совершенная система двух камер.<br />
                    Особый взгляд на прочность дисплея.<br />
                    Чип, с которым всё супербыстро.<br />
                    Аккумулятор держится заметно дольше.<br />
                    <i>iPhone 13 - сильный мира всего.</i><br />
                  </div>

                  <p>Мы разработали совершенно новую схему расположения и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась наша лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, мы освободили место для системы оптической стабилизации изображения сдвигом матрицы. И повысили скорость работы матрицы на сверхширокоугольной камере. Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков. Новая широкоугольная камера улавливает на 47% больше света для более качественных фотографий и видео.</p>
                  <p>Новая оптическая стабилизация со сдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении.</p>
                  <p>Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещения фокуса и изменения резкости. Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съёмки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео будут смотреться как настоящее кино.</p>
                </div>
              </div>

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

              <ReviewsList />

              {/* <div className="reviews-block">

                <div className="reviews-block__title">
                  <div className="reviews-block__head">
                    <h4 className="reviews-block__header">Отзывы</h4>
                    <span className="reviews-block__count">431</span>
                  </div>
                </div>

                <div className="reviews-block__border">
                  <div className="reviews-block__reviews">
                    <div className="reviews-block__screen-size">
                      <img className="reviews-block__review-image" src="./img/photo1.png" alt="" />

                      <div className="reviews-block__reviews reviews-block__l">
                        <div className="reviews-block__review-classname">
                          <h4>Марк Г.</h4>
                        </div>

                        <div className="reviews-block__review-raiting">
                          <img className="reviews-block__review-star" src="./img/star.png" alt="" />
                          <img className="reviews-block__review-star" src="./img/star.png" alt="" />
                          <img className="reviews-block__review-star" src="./img/star.png" alt="" />
                          <img className="reviews-block__review-star" src="./img/star.png" alt="" />
                          <img className="reviews-block__review-star" src="./img/star.png" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="reviews-block__review-content">
                      <div><strong>Опыт использования:</strong> менее месяца</div>
                      <div><strong>Достоинства:</strong><br /> это мой первый айфон после после огромного количества телефонов на андроиде. всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.</div>
                      <div><strong>Недостатки:</strong><br /> к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь) а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное</div>
                    </div>
                  </div>
                </div>

                <div className="reviews-block__border">
                  <div className="reviews-block__reviews">
                    <div className="reviews-block__screen-size">
                      <img className="reviews-block__review-image" src="./img/photo2.png" alt="" />

                      <div className="reviews-block__reviews">
                        <div className="reviews-block__review-classname">
                          <h4>Валерий Коваленко</h4>
                        </div>

                        <div className="reviews-block__review-raiting">
                          <img className="reviews-block__review-star" src="./img/star.png" alt="" />
                          <img className="reviews-block__review-star" src="./img/star.png" alt="" />
                          <img className="reviews-block__review-star" src="./img/star.png" alt="" />
                          <img className="reviews-block__review-star" src="./img/star.png" alt="" />
                          <img className="reviews-block__review-star" src="./img/g star.png" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="reviews-block__review-content">
                      <div><strong>Опыт использования:</strong> менее месяца</div>
                      <div><strong>Достоинства:</strong><br /> OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго</div>
                      <div><strong>Недостатки:</strong><br /> Плохая ремонтопригодность</div>

                    </div>
                  </div>
                </div>

              </div> */}

              <form className="review-form">
                <legend className="review-form__header">Добавить свой отзыв</legend>
                <div className="review-form__first">
                  <div className="review-form__name-block">
                    <input className="review-form__name" type="text" classname="formclassName" placeholder="Имя и фамилия" />
                    <div className="review-form__error" id="review-form-classname-error"></div>
                  </div>

                  <div className="review-form__raiting-block">
                    <input className="review-form__raiting" type="text" classname="formRaiting" placeholder="Оценка" />
                    <div className="review-form__error" id="review-form-raiting-error"></div>
                  </div>
                </div>

                <div className="review-form__second">
                  <textarea className="review-form__text" type="text" classname="formText" placeholder="Текст отзыва"></textarea>
                </div>

                <div>
                  <button type="submit" className="review-form__btn">Отправить отзыв</button>
                </div>

              </form>

            </div>

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

                  <div className="sidebar__like">
                    <svg width="28" height="22" viewBox="0 0 28 22">
                      <path d="M2.78502 2.57269C5.17872 0.27474 9.04661 0.27474 11.4403 2.57269L14.0001 5.03017L16.56 2.57269C18.9537 0.27474 22.8216 0.27474 25.2154 2.57269C27.609 4.87064 27.609 8.5838 25.2154 10.8818L14.0001 21.6483L2.78502 10.8818C0.391321 8.5838 0.391321 4.87064 2.78502 2.57269ZM9.67253 4.26974C8.25515 2.90905 5.97018 2.90905 4.55278 4.26974C3.1354 5.63044 3.1354 7.82401 4.55278 9.18476L14.0001 18.2542L23.4476 9.18476C24.865 7.82401 24.865 5.63044 23.4476 4.26974C22.0302 2.90905 19.7452 2.90905 18.3279 4.26974L14.0001 8.42432L9.67253 4.26974Z" />
                    </svg>
                  </div>
                </div>

                <div className="sidebar__cost2">
                  <span>67 990₽</span>
                </div>

                <div className="sidebar__delivery">
                  <span>Самовывоз в четверг, 1 сентября — <b>бесплатно</b></span>
                  <p>Курьером в четверг, 1 сентября — <b>бесплатно</b></p>
                  <button type="submit" className="sidebar__button_buy" id="sidebar-button-buy">Добавить в корзину</button>
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
          </div>
        </main>
      </div>

      {/* <footer>
        <div className="footer">
          <div className="container footer__container">
            <div className="footer__info">
              <p className="footer__copyright copyright-bold">© ООО «<span className="footer__page-classname">Мой</span>Маркет», 2018-2022.</p>
              <p className="footer__copyright">Для уточнения информации звоните по номеру <a className="link" href="tel:+79000000000">+7 900 000 0000</a>, <br />
                а предложения по сотрудничеству отправляйте на почту <a className="link" href="mailto:partner@mymarket.com">partner@mymarket.com</a></p>
            </div>

            <div><a classclassName="link" href="#top">Наверх</a></div>
          </div>
        </div>
      </footer> */}

    </div>
  )
}
