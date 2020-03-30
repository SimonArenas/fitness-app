import Card from "../components/Card";

import React from "react";

export default function ExerciseList(props) {
  return (
    <div>
      {props.exercises.map(exercise => {
        return (
          <Card
            // Props
            title={exercise.title}
            description={exercise.description}
            img={exercise.img}
            leftColor={exercise.leftColor}
            rightColor={exercise.rightColor}
          />
        );
      })}
    </div>
  );
}
