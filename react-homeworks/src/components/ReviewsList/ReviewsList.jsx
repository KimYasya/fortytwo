
import Review from "./Review";
import "./ReviewsList.css";
import RaitingList from "../RaitingList/RaitingList";
import RaitingList4 from "../RaitingList/RaitingList4";

export default function ReviewsList() {

  const reviews = [
    {
      id: 111,
      authorName: "Марк Г.",
      photoUrl: "./img/photo1.png",
      raiting: [<RaitingList />, <RaitingList />, <RaitingList />, <RaitingList />, <RaitingList />,],
      userExperience: "менее месяца",
      dignity: `Это мой первый айфон после после огромного количества телефонов на андроиде. 
      всё плавно, чётко и красиво. довольно шустрое устройство. 
      камера весьма неплохая, ширик тоже на высоте.`,
      limitations: `к самому устройству мало имеет отношение, 
      но перенос данных с андроида - адская вещь) 
      а если нужно переносить фото с компа, то это только через itunes, 
      который урезает качество фотографий исходное`,
    },
    {
      id: 112,
      authorName: "Валерий Коваленко",
      photoUrl: "./img/photo2.png",
      raiting: [<RaitingList />, <RaitingList />, <RaitingList />, <RaitingList />, <RaitingList4 />],
      userExperience: "менее месяца",
      dignity: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,
      limitations: `Плохая ремонтопригодность`,
    },
  ];

  return (
    <div className="reviews-block">

      <div className="reviews-block__title">
        <div className="reviews-block__head">
          <h4 className="reviews-block__header">Отзывы</h4>
          <span className="reviews-block__count">431</span>
        </div>
      </div>

     
        <div className="reviews-block__reviews">

          <div className="reviews-block__border">
            Здесь скоро будут отзывы
            <Review />
          </div>
        </div>
      
    </div>
  )
}


