import React, { Component } from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";

export default class ExerciseNew extends Component {
  state = {
    form: {
      title: "",
      description: "",
      img:
        "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
      leftColor: "",
      rightColor: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm">
          <Card {...this.state.form} />
        </div>
        <div className="col-sm">
          <ExerciseForm onChange={this.handleChange} form={this.state.form} />
        </div>
      </div>
    );
  }
}
