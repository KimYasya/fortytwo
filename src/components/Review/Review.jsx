import React from "react";
import "./Review.css";

export default function Review(props) {

  const { authorName, photoUrl, raiting, userExperience, dignity, limitations } = props

  return (
    <div className="reviews-block__content">

      <div className="reviewsLeft bigScreen">
        <img className="review-image" src={`${photoUrl}`} alt="фото автора" />
        <div className="reviewsNameRait">
          <div className="review-name">{authorName}</div>
          <div>
            {raiting <= 1 ? <img src="/img/g star.png" alt="star" /> : <img src="/img/star.png" alt="star" />}
            {raiting <= 2 ? <img src="/img/g star.png" alt="star" /> : <img src="/img/star.png" alt="star" />}
            {raiting <= 3 ? <img src="/img/g star.png" alt="star" /> : <img src="/img/star.png" alt="star" />}
            {raiting <= 4 ? <img src="/img/g star.png" alt="star" /> : <img src="/img/star.png" alt="star" />}
            {raiting <= 5 ? <img src="/img/g star.png" alt="star" /> : <img src="/img/star.png" alt="star" />}
          </div>
        </div>
      </div>

      <img className="review-image smallScreen" src={`${photoUrl}`} alt="фото автора" />
      <div className="reviews">
        <div className="review-name smallScreen">{authorName}</div>
        <div className="smallScreen">
          {raiting < 1 ? <img src="/img/g star.png" alt="star" /> : <img src="/img/star.png" alt="star" />}
          {raiting < 2 ? <img src="/img/g star.png" alt="star" /> : <img src="/img/star.png" alt="star" />}
          {raiting < 3 ? <img src="/img/g star.png" alt="star" /> : <img src="/img/star.png" alt="star" />}
          {raiting < 4 ? <img src="/img/g star.png" alt="star" /> : <img src="/img/star.png" alt="star" />}
          {raiting < 5 ? <img src="/img/g star.png" alt="star" /> : <img src="/img/star.png" alt="star" />}
        </div>
        <div className="review-content">
          <div><span className="boldText">{`Опыт использования:`}</span> {userExperience}</div>
          <div><span className="boldText">{`Достоинства:`}</span> <br /> {dignity}</div>
          <div><span className="boldText">{`Недостатки:`}</span> <br /> {limitations}</div>
        </div>
      </div>
    </div>

  );
}


