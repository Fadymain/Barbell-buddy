import React from 'react';
// import InterviewerListItem from "./InterviewerListItem"
// import "./InterviewerList.scss"

function ExercisesList(props) {

  return (
      <section>
        <button>Back</button>
        <h1>Select Exercise:</h1>
        <h2>Deadlift</h2>
        <h2>Squats</h2>
        <h2>Bench Press</h2>
        <h2>Lunges</h2>
        <h2>Overhead Press</h2>
        <div>
          <button>+</button>
          <h3>ADD EXERCISE</h3>
        </div>
      </section>
  );

}

export default ExercisesList;