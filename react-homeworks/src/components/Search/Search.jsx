import React from "react";
import "./Search.css";

export default function Search(props) {

  const {value, onInput, onClick } = props;
 


  return (
    <div className="search-box">
      <input type="text" 
      name="" 
      id="text-to-find" 
      className="search-txt" 
      placeholder="Type to search" 
      value={value}
      onInput={onInput}
 />
      <div className="search-btn" type="submit" value="Искать" onClick={onClick}>
        <svg viewBox="0 0 26.1 26.1">
          <path d="m25.806,22.9l-5.4-5.4c-0.2-0.2-0.2-0.4-0.1-0.6 1.1-1.7 1.7-3.7 1.7-5.9 0-6.1-4.9-11-11-11s-11,4.9-11,11 4.9,11 11,11c2.2,0 4.2-0.6 5.9-1.7 0.2-0.1 0.5-0.1 0.6,0.1l5.4,5.4c0.4,0.4 1,0.4 1.4,0l1.4-1.4c0.5-0.5 0.5-1.1 0.1-1.5zm-14.7-4.9c-3.9,0-7-3.1-7-7s3.1-7 7-7 7,3.1 7,7-3.1,7-7,7z" />
        </svg>
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
    </div>
  )
}