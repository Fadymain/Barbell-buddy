import React from 'react';
// import InterviewerListItem from "./InterviewerListItem"
// import "./InterviewerList.scss"

function ExercisesList(props) {

  return (
      <section>
        <button>Back</button><br/>
        <h1>Select Exercise:</h1>
        <div className='exerciselist'>
          <button>Deadlift</button><br/>
          <button>Squats</button><br/>
          <button>Bench Press</button><br/>
          <button>Lunges</button><br/>
          <button>Overhead Press</button>
        </div>
        <div>
          <button>+</button>
          <h4>ADD EXERCISE</h4>
        </div>
      </section>
  );

}

export default ExercisesList;