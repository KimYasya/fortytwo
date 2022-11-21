import "./ReviewPhoto.css";
import RaitingList from "../RaitingList/RaitingList";
import RaitingList4 from "../RaitingList/RaitingList4";

export default function ReviewPhoto(props) {

  const { id, photoUrl } = props;

   
  return (
     <img id={id} className="review-image" src={ photoUrl } alt="фото автора" />
 
    
  )
}