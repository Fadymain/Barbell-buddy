import React from 'react';
import { Link } from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { useState } from 'react';

// getAllExercises request to db -> gets array of exercises
const excercises = ["Deadlifts", "Squats", "Bench Press", "Lunges", "Overhead Press"];


function ExercisesList(props) {

  const [currentExcercise, setCurrentExercise] = useState();

  return (
    <section>

      <Link to="/day">
        <KeyboardBackspaceIcon />
      </Link>

      <h1>Select Exercise:</h1>
      <div className='exerciselist'>
        {excercises.map(item => <div><button onClick={() => setCurrentExercise(item)}>{item}</button></div>)}
      </div>

      {/* <div className='exerciselist'>
        <br />
        <img
          src="images/deadlift.png"
          className="save"
          alt="save"
        />
        <br />
        <img
          src="images/squats.png"
          className="save"
          alt="save"
        />
        <br />
        <img
          src="images/benchPress.png"
          className="save"
          alt="save"
        />
        <br />
        <img
          src="images/lunges.png"
          className="save"
          alt="save"
        />
        <br />
        <img
          src="images/overheadPress.png"
          className="save"
          alt="save"
        />
        <br />
      </div> */}

      <div>
        <img
          src="images/add50.png"
          className="save"
          alt="save"
        />
        Add Exercise
      </div>

    </section>
  );

}

export default ExercisesList;