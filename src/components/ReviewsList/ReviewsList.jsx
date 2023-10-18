import React from "react";
import Review from "../Review/Review";

import "./ReviewsList.css";

export default function ReviewsList() {

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

  return (

    <div className="reviews-block">

      <div className="reviews-block__title">
        <div className="reviews-block__head">
          <h4 className="reviews-block__header">Отзывы</h4>
          <span className="reviews-block__count">431</span>
        </div>
      </div>

      <div className="reviews-block__reviews">

        {reviews.map(function (review) {

          return (
            <div key={review.id} className={`"" ${review.id === reviews.length ? "dontShow" : "reviews-block__border"} `}>
              <Review authorName={review.authorName}
                photoUrl={review.photoUrl}
                raiting={review.raiting}
                userExperience={review.userExperience}
                dignity={review.dignity}
                limitations={review.limitations}
              />
            </div>
          )
        }
        )}

      </div>

    </div>
  )
}


