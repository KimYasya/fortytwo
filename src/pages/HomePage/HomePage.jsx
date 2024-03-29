import React from "react";
import Project from "../../components/Project/Project";
import Footer from "../../components/Footer/Footer";
import HeaderApp from "../../components/HeaderApp/HeaderApp";

import styles from "./HomePage.module.css";
import AboutMe from "../../components/AboutMe/AboutMe";

export default function HomePage() {
  return (
    <div className={styles.body}>
      <HeaderApp
        text={`Kim`}
        textTwo={`Yana`}
        contactOne={
          <a
            href="https://instagram.com/_yana.kim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.imgLogo}
              src="./img/insta-logo.png"
              alt="insta logo"
            />
          </a>
        }
        contactTwo={
          <a
            href="https://t.me/Yana_Kim89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.imgLogo}
              src="./img/telegram-logo.png"
              alt="telegram logo"
            />
          </a>
        }
      />

      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <div className={styles.projects}>
            <AboutMe />

            <div className={styles.projectItem}>
              <div className={styles.projectText}>
                Итак, вот что я умею {`=)`}
              </div>
              <Project
                projectName={`Резюме`}
                projectAbout={`Немного обо мне, моих навыках и опыте`}
                link={"/resume"}
                linkText={`Посмотреть резюме`}
              />
            </div>

            <div className={styles.projectItem}>
              <div className={styles.projectText}>Код</div>
              <Project
                projectName={`GitHub`}
                projectAbout={`Тут можно посмотреть код всех нижеперечисленных проектов`}
                link={"https://github.com/KimYasya?tab=repositories"}
                target={"_blank"}
                rel={"noopener noreferrer"}
                linkText={`Перейти на GitHub`}
              />
            </div>

            <div className={styles.projectItem}>
              <div className={styles.projectText}>
                Страница товара интернет-магазина
              </div>
              <Project
                projectName={`Cмартфон Apple iPhone 13, синий`}
                projectAbout={
                  <span className={styles.text}>
                    [6.1, 128 ГБ, IOS 15, NFC, Bluetooth, Wi-Fi, Apple A15
                    Bionic] 173 г
                  </span>
                }
                link={"/product"}
                linkText={`Купить`}
              />
            </div>

            <div className={styles.projectItem}>
              <div className={styles.projectText}>Приложение ToDo</div>
              <Project
                projectName={`ToDo List`}
                projectAbout={`Небольшое приложение с использованием модальных окон и drag-n-drop. Умеет сохранять информацию в localStorage`}
                link={"/todo-app"}
                linkText={`К приложению`}
              />
            </div>

            <div className={styles.projectItem}>
              <div className={styles.projectText}>Форма изменения пароля</div>
              <Project
                projectName={`Форма с валидацией`}
                projectAbout={`Форма изменения пароля с валидацией по контрольному слову, длине пароля и совпадении паролей. Все поля до полной отправки формы хранит в localStorage.
                       Контрольное слово - "тест"`}
                link={"/change_password"}
                linkText={`Перейти`}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
