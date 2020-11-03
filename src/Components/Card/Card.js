import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-main">
      <img src={props.img} alt="song-img" className="song-img" />
    </div>
  );
}

export default Card;
