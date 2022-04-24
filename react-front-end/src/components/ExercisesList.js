import React from 'react';
import {Link} from "react-router-dom"
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
          {excercises.map(item => <><button onClick={() => setCurrentExercise(item)}>{item}</button><br/></>)}
          {/* <button>Deadlift</button><br/>
          <button>Squats</button><br/>
          <button>Bench Press</button><br/>
          <button>Lunges</button><br/>
          <button>Overhead Press</button> */}
        </div>

      <div>
        <Fab size="small" color="secondary" aria-label="add" >
          <AddIcon />
        </Fab>
        Add Exercise
      </div>

      </section>
  );

}

export default ExercisesList;