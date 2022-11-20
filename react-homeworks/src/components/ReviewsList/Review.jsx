import "./Review.css";
import ReviewPhoto from "./ReviewPhoto";


export default function Review() {


  return (

    <div className="reviews-block__content" >
      <ReviewPhoto />

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