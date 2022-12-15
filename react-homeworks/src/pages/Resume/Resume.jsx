import React from "react";
import Footer from "../../components/Footer/Footer";
import HeaderApp from "../../components/HeaderApp/HeaderApp";
import styles from "./Resume.module.css"

export default function Resume() {

  return (
    <>
      <HeaderApp text={`Kim`}
        textTwo={`Yana`}
        contactOne={<a href="https://instagram.com/_yana.kim" target="_blank" rel="noopener noreferrer"><img className={styles.imgLogo} src="./img/insta-logo.png" alt="insta logo" /></a>}
        contactTwo={<a href="https://t.me/Yana_Kim89" target="_blank" rel="noopener noreferrer"><img className={styles.imgLogo} src="./img/telegram-logo.png" alt="telegram logo" /></a>}
      />
      <div className={styles.container}>
        <div className={styles.mainContainer}>

          <div className={styles.skills}>
            <img className={styles.myPhoto} src="./img/myphoto.png" alt="YanaKim" />
            <div className={styles.block}>
              <div className={styles.header}>КОНТАКТЫ</div>
            </div>
            <div className={styles.contactBlock}>
              <div className={styles.contact}>
                <img className={styles.imgLogo} src="./img/telephone.png" alt="телефон" />
                <span className={styles.text}>+7 911 299 05 90</span>
              </div>
              <div className={styles.contact}>
                <img className={styles.imgLogo} src="./img/telegram-logo-white.png" alt="телеграм" />
                <span className={styles.text}>@Yana_Kim89</span>
              </div>
              <div className={styles.contact}>
                <img className={styles.imgLogo} src="./img/mail.png" alt="почта" />
                <span className={styles.text}>ykim.89@mail.ru</span>
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.header}>ЯЗЫКИ</div>
            </div>
            <div className={styles.contactBlock}>
              <div className={styles.language}>
                <span className={styles.text}>Английский</span>
                <div className={styles.itemBlock}>
                  <div className={styles.circleBlock}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circleGrey}></div>
                    <div className={styles.circleGrey}></div>
                    <div className={styles.circleGrey}></div>
                  </div>
                  <span className={styles.subText}>B1 - Intermediate</span>
                </div>
              </div>

              <div className={styles.language}>
                <span className={styles.text}>Русский</span>
                <div className={styles.itemBlock}>
                  <div className={styles.circleBlock}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                  </div>
                  <span className={styles.subText}>Родной</span>
                </div>
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.header}>НАВЫКИ</div>
            </div>
            <div className={styles.contactBlock}>
              <div className={styles.contact}>
                <ul className={styles.skillsList}>
                  <li>HTML5, CSS3</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Javascript</li>
                  <li>Git</li>
                  <li>Figma</li>
                  <li>Npm</li>
                  <li>Flex</li>
                  <li>BEM</li>
                  <li>Адаптивная верстка</li>
                  <li>Работоспособность</li>
                  <li>Тяга к знаниям</li>
                </ul>
              </div>
            </div>

          </div>

          <div className={styles.exp}>
            <div className={styles.headerName}>КИМ ЯНА ИГОРЕВНА</div>
            <div className={`${styles.header} ${styles.marg}`}>JUNIOR FRONTEND-DEVELOPER</div>
            <div className={styles.info}>
              <div className={styles.infoBlock}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_405_1458)">
                    <path d="M12.0001 4.4928e-05C10.5534 -0.00371006 9.12036 0.280576 7.78463 0.836328C6.4489 1.39208 5.23717 2.20818 4.22009 3.23704C2.15462 5.32282 0.999432 8.14182 1.0073 11.0772C1.01517 14.0126 2.18546 16.8254 4.26209 18.9L8.00009 22.359C9.06213 23.4053 10.4915 23.9943 11.9823 24.0001C13.4731 24.0059 14.9069 23.428 15.9771 22.39L19.7841 18.854C21.843 16.777 22.9982 13.9707 22.9982 11.046C22.9982 8.1214 21.843 5.31514 19.7841 3.23804C18.7666 2.20852 17.5543 1.39196 16.2178 0.836015C14.8814 0.280074 13.4476 -0.00411084 12.0001 4.4928e-05ZM17.7001 16.7L13.9001 20.226C13.3828 20.7204 12.6933 20.9937 11.9778 20.9879C11.2623 20.9821 10.5773 20.6977 10.0681 20.195L6.34609 16.736C4.84519 15.2222 4.00307 13.1768 4.00307 11.045C4.00307 8.9133 4.84519 6.86786 6.34609 5.35404C7.08663 4.60809 7.96747 4.01604 8.93785 3.61203C9.90823 3.20801 10.949 3.00001 12.0001 3.00001C13.0512 3.00001 14.0919 3.20801 15.0623 3.61203C16.0327 4.01604 16.9135 4.60809 17.6541 5.35404C19.1526 6.85899 19.9978 8.89383 20.0064 11.0176C20.015 13.1414 19.1864 15.183 17.7001 16.7ZM17.0001 10.128V14C17.0001 14.2653 16.8947 14.5196 16.7072 14.7072C16.5197 14.8947 16.2653 15 16.0001 15H15.0001C14.7349 15 14.4805 14.8947 14.293 14.7072C14.1054 14.5196 14.0001 14.2653 14.0001 14V12C14.0001 11.7348 13.8947 11.4805 13.7072 11.2929C13.5197 11.1054 13.2653 11 13.0001 11H11.0001C10.7349 11 10.4805 11.1054 10.293 11.2929C10.1054 11.4805 10.0001 11.7348 10.0001 12V14C10.0001 14.2653 9.89473 14.5196 9.70719 14.7072C9.51966 14.8947 9.2653 15 9.00009 15H8.00009C7.73487 15 7.48052 14.8947 7.29298 14.7072C7.10544 14.5196 7.00009 14.2653 7.00009 14V10.128C7.00013 9.8051 7.07838 9.48697 7.22815 9.20084C7.37791 8.91472 7.59474 8.66912 7.86009 8.48504L10.8601 6.40304C11.1949 6.17079 11.5926 6.04633 12.0001 6.04633C12.4076 6.04633 12.8053 6.17079 13.1401 6.40304L16.1401 8.48504C16.4054 8.66912 16.6223 8.91472 16.772 9.20084C16.9218 9.48697 17 9.8051 17.0001 10.128Z" fill="#374957" />
                  </g>
                  <defs>
                    <clipPath id="clip0_405_1458">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className={`${styles.text} ${styles.marg}`}>г. Санкт-Петербург м. Ленинский пр.</span>
              </div>

              <div className={styles.infoBlock}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_405_1616)">
                    <path d="M18.4999 24.0001H13.0339C11.1607 24.0329 9.30125 23.6754 7.57378 22.9504C5.8463 22.2254 4.28863 21.1489 2.99985 19.7891C1.90937 18.597 1.08311 17.1879 0.575243 15.6541C0.0673742 14.1203 -0.110644 12.4965 0.0528543 10.8891C0.300943 8.27379 1.39876 5.81165 3.17844 3.87919C4.95812 1.94673 7.32172 0.650308 9.90786 0.188148C11.6068 -0.126982 13.3546 -0.0599384 15.0244 0.384414C16.6943 0.828767 18.2442 1.63928 19.5619 2.75715C20.9568 3.92975 22.0772 5.39433 22.8441 7.04743C23.6109 8.70053 24.0055 10.5018 23.9999 12.3241V18.5001C23.998 19.9583 23.4179 21.3561 22.3869 22.3872C21.3559 23.4182 19.958 23.9983 18.4999 24.0001ZM12.0299 3.00015C9.78436 2.99821 7.61886 3.8338 5.95668 5.34359C4.29451 6.85338 3.25518 8.9288 3.04185 11.1641C2.91951 12.3565 3.05047 13.5613 3.42615 14.6996C3.80184 15.8378 4.41377 16.8839 5.22185 17.7691C6.22899 18.8197 7.4435 19.6494 8.78832 20.2056C10.1331 20.7618 11.5789 21.0324 13.0339 21.0001H18.4999C19.1629 21.0001 19.7988 20.7368 20.2676 20.2679C20.7365 19.7991 20.9999 19.1632 20.9999 18.5001V12.3241C21.0045 10.94 20.7054 9.5716 20.1239 8.3155C19.5423 7.0594 18.6923 5.94613 17.6339 5.05415C16.0693 3.72529 14.0826 2.99712 12.0299 3.00015ZM11.9999 6.00015C11.602 6.00015 11.2205 6.15818 10.9392 6.43949C10.6579 6.72079 10.4999 7.10232 10.4999 7.50015C10.4999 7.89797 10.6579 8.2795 10.9392 8.56081C11.2205 8.84211 11.602 9.00015 11.9999 9.00015C12.3977 9.00015 12.7792 8.84211 13.0605 8.56081C13.3418 8.2795 13.4999 7.89797 13.4999 7.50015C13.4999 7.10232 13.3418 6.72079 13.0605 6.43949C12.7792 6.15818 12.3977 6.00015 11.9999 6.00015ZM12.4999 19.0001C12.102 19.0001 11.7205 18.8421 11.4392 18.5608C11.1579 18.2795 10.9999 17.898 10.9999 17.5001V13.0001H10.4999C10.102 13.0001 9.7205 12.8421 9.43919 12.5608C9.15789 12.2795 8.99986 11.898 8.99986 11.5001C8.99986 11.1023 9.15789 10.7208 9.43919 10.4395C9.7205 10.1582 10.102 10.0001 10.4999 10.0001H11.4999C12.1629 10.0001 12.7988 10.2635 13.2676 10.7324C13.7365 11.2012 13.9999 11.8371 13.9999 12.5001V17.5001C13.9999 17.898 13.8418 18.2795 13.5605 18.5608C13.2792 18.8421 12.8977 19.0001 12.4999 19.0001Z" fill="#374957" />
                  </g>
                  <defs>
                    <clipPath id="clip0_405_1616">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className={`${styles.text} ${styles.marg}`}>Возраст: 33 года</span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}