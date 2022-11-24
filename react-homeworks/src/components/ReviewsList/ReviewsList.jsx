import React from "react";
import RaitingList from "../RaitingList/RaitingList";
import RaitingList4 from "../RaitingList/RaitingList4";
import "./ReviewsList.css";

export default function ReviewsList() {

  return (
    <div className="reviews-block">

      <div className="reviews-block__title">
        <div className="reviews-block__head">
          <h4 className="reviews-block__header">Отзывы</h4>
          <span className="reviews-block__count">431</span>
        </div>
      </div>
     
      <Review />
</div>

  )

 function Review() {

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
        raiting: [<RaitingList />, <RaitingList />, <RaitingList />, <RaitingList />, <RaitingList4 /> ],
        userExperience: "менее месяца",
        dignity: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,
        limitations: `Плохая ремонтопригодность`,
      },
    ];

    return (
      <div className="reviews-block__reviews">

          {reviews.map(function (review) {

            return (
              <div className="reviews-block__border">
                <div className="reviews-block__content">
                  <img className="review-image" src={`${review.photoUrl}`} alt="фото автора" />
                    <div className="reviews">
                      <div className="review-name">{review.authorName}</div>
                      <div>{review.raiting}</div>
                        <div className="review-content">
                          <div>{`Опыт использования: ${review.userExperience}`}</div>
                          <div>{`Достоинства: \n ${review.dignity}`}</div>
                          <div>{`Недостатки: \n ${review.limitations}`}</div>
                        </div>
                    </div>
                </div>
              </div>
            );

          })}

        </div>

        
      );
  }
}


   