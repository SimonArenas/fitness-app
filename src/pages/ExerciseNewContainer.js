import React, { Component } from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";
import "../components/styles/ExerciseNew.css";
import FatalError from "./error500";
import ExerciseNew from "./ExerciseNew";
import url from "./config";

export default class ExerciseNewContainer extends Component {
  state = {
    form: {
      title: "",
      description: "",
      img:
        "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
      leftColor: "",
      rightColor: ""
    },
    loading: false,
    error: null
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  // POST API
  handleSubmit = async e => {
    this.setState({
      loading: true
    });
    e.preventDefault();
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.form)
      };

      let res = await fetch(`${url}/exercises`, config);
      let json = await res.json();

      this.setState({
        loading: false
      });

      this.props.history.push("/");
    } catch (error) {
      this.setState({
        loading: false,
        error
      });
    }
  };

  render() {
    if (this.state.error) {
      return <FatalError />;
    }
    return (
      <ExerciseNew
        form={this.state.form}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
