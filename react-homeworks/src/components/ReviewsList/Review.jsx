import "./Review.css";
import ReviewPhoto from "./ReviewPhoto";


export default function Review() {

  const reviews = [
    {
      id: 20,
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
      id: 21,
      authorName: "Валерий Коваленко",
      photoUrl: "./img/photo2.png",
      raiting: [<RaitingList />, <RaitingList />, <RaitingList />, <RaitingList />, <RaitingList4 />],
      userExperience: "менее месяца",
      dignity: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,
      limitations: `Плохая ремонтопригодность`,
    },
  ];

  return (

    <div className="reviews-block__content" >
      {reviews.map(function (review) {
        <ReviewPhoto
          key={ review.id }
          src={ review.photoUrl }
        />

      })}


      {/* <div className="reviews">
                <div className="review-name">{authorName}</div>
                <div>{raiting}</div>
                <div className="review-content">
                  <div>{userExperience}</div>
                  <div>{dignity}</div>
                  <div>{limitations}</div>
                </div>
              </div> */}
    </div>
  );
}