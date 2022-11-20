import "./ReviewPhoto.css";
import RaitingList from "../RaitingList/RaitingList";
import RaitingList4 from "../RaitingList/RaitingList4";

export default function ReviewPhoto() {

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
    <div>
      {reviews.map(function (review) {
        <img className="review-image" src={review.photoUrl} alt="фото автора" />
      })}
    </div>
  )
}