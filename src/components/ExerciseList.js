import Card from "../components/Card";

import React from "react";

export default function ExerciseList(props) {
  return (
    <div>
      {props.exercises.map(exercise => {
        return (
          <Card
            // Props
            key={exercise.id}
            {...exercise}
          />
        );
      })}
    </div>
  );
}
