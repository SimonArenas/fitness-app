import React from "react";
import "./styles/styles.css";
import circlesImg from "../img/circles.png";


const Card = ({ title, description, img, leftColor, rightColor }) => (


  <div
    className="card mx-auto Fitness-Card hvr-underline-from-center hvr-float"
    style={{
      backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor ||
        "#c31432"}, ${rightColor || "#240b36"})`
    }}
  >
    <div className="card-body">
      <div className="row center">
        <div className="col-6">
          <img src={img} className="float-right" alt="Coloca tu imagen aquí" />
        </div>
        <div className="col-6 Fitness-Card-Info">
          <h1>{title || "Your title here"}</h1>
          <p>{description || "Your description here"}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
