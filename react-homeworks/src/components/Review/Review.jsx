import React from "react";
import RaitingFive from "../RaitingList/RaitingFive";
import RaitingFour from "../RaitingList/RaitingFour";
import "./Review.css";

export default function Review() {

  const reviews = [
    {
      id: 1,
      authorName: "Марк Г.",
      photoUrl: "./img/photo1.png",
      raiting: 5,
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
      id: 2,
      authorName: "Валерий Коваленко",
      photoUrl: "./img/photo2.png",
      raiting: 4,
      userExperience: "менее месяца",
      dignity: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,
      limitations: `Плохая ремонтопригодность`,
    },
  ];

  const ratingArr = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= reviews.rating) ratingArr.push(true);
    else ratingArr.push(false);
  }


  return (
    <div>

      {reviews.map(function (review) {

        return (

          <div key={review.id} className={`"" ${review.id === reviews.length ? "dontShow" : "reviews-block__border"} `}>
            <div className="reviews-block__content">

              <div className="reviewsLeft bigScreen">
                <img className="review-image" src={`${review.photoUrl}`} alt="фото автора" />
                <div className="reviewsNameRait">
                  <div className="review-name">{review.authorName}</div>
                  <div>{ratingArr.map((item, index) => {
                    if (item) return <img src="img/star.svg" alt="star" key={index} />;
                    else return <img src="img/g star.svg" alt="star" key={index} />;
                  })}
                  </div>
                </div>
              </div>

              <img className="review-image smallScreen" src={`${review.photoUrl}`} alt="фото автора" />
              <div className="reviews">
                <div className="review-name smallScreen">{review.authorName}</div>
                <div className="smallScreen">{review.raiting < 5 ? <RaitingFour /> : <RaitingFive />}</div>
                <div className="review-content">
                  <div><span className="boldText">{`Опыт использования:`}</span> {review.userExperience}</div>
                  <div><span className="boldText">{`Достоинства:`}</span> <br /> {review.dignity}</div>
                  <div><span className="boldText">{`Недостатки:`}</span> <br /> {review.limitations}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

    </div>
  );
}