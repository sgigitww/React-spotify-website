import React from "react";
import "./Music.css";
import Card from "../Card/Card";

function Music() {
  return (
    <div className="music">
      <div className="music-content">
        <h1 className="music-heading">Looking for music?</h1>
        <p className="music-para">Start listening to the best new releases.</p>
        <button className="btn btn-dark">LAUNCH WEB PLAYER</button>
      </div>

      <div className="music-container">
        <div className="cards">
          <Card img="https://i.ytimg.com/an/tcYodQoapMg/924506927927750806_mq.jpg?v=5f9bae3f" />
          <Card img="https://static.billboard.com/files/2020/09/Sam-Smith-2020-cr-Alasdair-McLellan-billboard-1548-1600711974-1024x677.jpg" />
          <Card img="https://t2.genius.com/unsafe/344x0/https%3A%2F%2Fimages.genius.com%2Fed93193cf4474722d518b22b23ce9922.1000x1000x1.png" />
          <Card img="https://remezcla.com/wp-content/uploads/2020/10/Generic-1-1068x801.jpg" />
          <Card img="https://images.genius.com/1197d5e03d867c909b9450f0460e6d21.1000x1000x1.jpg" />
          <Card img="https://t2.genius.com/unsafe/252x0/https%3A%2F%2Fimages.genius.com%2Fab645dc8bcd8632362e7346bcf685dbe.1000x1000x1.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Music;
