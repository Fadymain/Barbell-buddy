import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ExerciseContext from './ExerciseContext';
import "./ExerciseList.css"
import BottomNav from './BottomNav';

// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import { useParams } from 'react-router-dom'



// getAllExercises request to db -> gets array of exercises
// const exercises = ["Deadlifts", "Squats", "Bench Press", "Lunges", "Overhead Press"];
// const exercises = [
//   { type: "Deadlifts", id: 1},
//   { type: "Squats", id: 2 }
// ];



function ExercisesList(props) {

  // const { id } = useParams();
  const exercises = useContext(ExerciseContext);

  return (
    <section>
      <div id="app-modal"/>

      <Link to="/day">
        <KeyboardBackspaceIcon />
      </Link>

      <h1>Select Exercise:</h1> 
      <div className='exerciselist'>
        {exercises.map(item => <div key={item.id}> <Link to={`/counter/${item.id}`} > <button className="button-29" >{item.type}</button></Link></div>)}
      </div>

      <div>
        <button className='add-button'>+</button>
        <span>Add Exercise</span>
      </div>

      <BottomNav />

    </section>
  );

}

export default ExercisesList;