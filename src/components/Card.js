import React, { Component } from "react";
import exerciseImg from "../img/exercise.png";
import "./styles/styles.css";
import circlesImg from "../img/circles.img"
class Card extends Component {
  render() {
    return (
      <div className="card mx-auto Fitness-Card"
      style={{
        backgroundImage: `url(${circlesImg}) no-repeat, linear-gradient(to right, #A74CF2, #617BFB)`

      }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={exerciseImg} className="float-right" />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>Technique Guides</h1>
              <p>Learn amazing street workout and calisthenics</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
