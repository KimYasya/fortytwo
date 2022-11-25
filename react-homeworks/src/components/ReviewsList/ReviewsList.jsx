import React from "react";
import Review from "../Review/Review";

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

      <div className="reviews-block__reviews">

        <Review />

      </div>
    </div>

  )
}


