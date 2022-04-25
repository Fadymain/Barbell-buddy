import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ExcerciseContext from './ExercsiseContext';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import { useParams } from 'react-router-dom'



// getAllExercises request to db -> gets array of exercises
// const excercises = ["Deadlifts", "Squats", "Bench Press", "Lunges", "Overhead Press"];
// const excercises = [
//   { type: "Deadlifts", id: 1},
//   { type: "Squats", id: 2 }
// ];



function ExercisesList(props) {

  // const [currentExcercise, setCurrentExercise] = useState();
  // const { id } = useParams();
  const exercises = useContext(ExcerciseContext)

  return (
    <section>

      <Link to="/day">
        <KeyboardBackspaceIcon />
      </Link>

      <h1>Select Exercise:</h1> 
      <div className='exerciselist'>
        {exercises.map(item => <div key={item.id}> <Link to={`/counter/${item.id}`} > <button >{item.type}</button></Link></div>)}
      </div>

      <div>
        <img
          src="images/add50.png"
          className="save"
          alt="save"
        />
        <span>Add Excercise</span>
      </div>

    </section>
  );

}

export default ExercisesList;