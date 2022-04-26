import React, { useContext, useState } from 'react';
import CounterListItem from './CounterListItem';
import "./Counter.css"

import { Link, useParams } from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
// import EditSharpIcon from '@material-ui/icons/EditSharp';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import ExerciseContext from './ExerciseContext';
import BottomNav from './BottomNav';
import Nav from './Nav';
import { makeStyles, Fab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  addButton: {
    margin: 10,
    // top: "auto",
    // right: 20,
    // bottom: 20,
    // left: "auto",
    // position: "fixed",
    color: "black",
    // zIndex: 20,
    backgroundColor: "DeepSkyBlue"
  },
  backButton :{
    color: "black"
  },
  workout: {
    borderRadius: 25,
    backgroundColor: "lightgray"
  },
  addEx: {
    display: "flex",
    position: "fixed",
    bottom: "70px",
    margin: "2%",
    alignItems: "center"
  }
}));

function Counter(props) {

  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [completed, updateCompleted] = useState([]);
  const exercises = useContext(ExerciseContext);

  const params = useParams();
  const exercise = exercises.find((item) => item.id == params.id)

  const classes = useStyles();

  // console.log("params", params);
  // console.log("exercise", exercise);


  const updateRep = function (rep, weight) {
    // debugger
    if (!rep && !weight) {
      return;
    }
    setReps(rep);
    setWeight(weight);
  }

  const completeSet = function (set) {
    // debugger
    updateCompleted([...completed, set])
  }



  return (
    <section>
      <Nav />
      
      <div style={{display: "flex", padding: "5% 0 0 5%" }}>
        <Link to="/exercises">
          <KeyboardBackspaceIcon className={classes.backButton} />
        </Link>
      </div>

      <h2>{exercise.type}</h2>

      <Link to="/platecalc">
        <button className="button-85"  >Plate Calculator</button>
      </Link>

      <div>
        <form autoComplete='off' onSubmit={event => event.preventDefault()}>
          <div>
            <label htmlFor="weight">WEIGHT (lbs):</label><br />
            <input type="text" id="weight" name="weight" onChange={(event) => updateRep(reps, event.target.value)} />
          </div>
          <div>
            <label htmlFor="reps">REPS:</label><br />
            <input type="text" id="reps" name="reps" onChange={(event) => updateRep(event.target.value, weight)} />
          </div>
          {/* <input onClick={() => completeSet({reps, weight})} type="submit" value="SET COMPLETED"/> */}

          <button onClick={() => completeSet({ reps, weight })} className="button-72" >SET DONE</button>

        </form>
      </div>

      <div>
        <h3>Completed Sets:</h3>
        <ul>
          {completed.map((set, index) => <CounterListItem key={index} index={index + 1} rep={set.reps} weight={set.weight} />)}
        </ul>
        <button className="edit-button" >EDIT</button>
        <button className="save-button" >SAVE</button>
      </div>

      <BottomNav />

    </section>
  );

}

export default Counter;