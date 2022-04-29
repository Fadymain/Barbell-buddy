import React, { useContext, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ExerciseContext from './ExerciseContext';
import "./ExerciseList.css"
import BottomNav from './BottomNav';
import Nav from './Nav';
import { makeStyles, Fab, Typography } from '@material-ui/core';
// import AddIcon from '@material-ui/icons/Add';
// import CustomizedDialogs from './FormDialog';
import FormDialog from './FormDialog';
import {getWorkoutsForUser, getAllWorkoutsForDay, getAllExerciseTypes, getTypeExercise, getUniqueExercise} from "../helpers/selectors";

/*
import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ExerciseContext from './ExerciseContext';
import "./ExerciseList.css"
import BottomNav from './BottomNav';
import Nav from './Nav';
import { makeStyles, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
*/

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
  },
  excButton: {
    padding: 5,
    // fontFamily: ""
  }
}));


// getAllExercises request to db -> gets array of exercises
// const exercises = ["Deadlifts", "Squats", "Bench Press", "Lunges", "Overhead Press"];
// const exercises = [
//   { type: "Deadlifts", id: 1},
//   { type: "Squats", id: 2 }
// ];



function ExercisesList(props) {

  const classes = useStyles();
  //const params = useParams();
  //console.log("params", params.date)
  //const ObjExerciseDays = new Date(params.date);
  //console.log("ObjExerciseDays", ObjExerciseDays.toISOString());
  // const { id } = useParams();
  const {exercises, setExercises, day2, setDay2, state, addExercise} = useContext(ExerciseContext);
 
  const [ exerciseType, setExerciseType ] = useState("");
  const currentDayExercise = getUniqueExercise(state);
  /*
  const currentDayExercise = getAllWorkoutsForDay(state, ObjExerciseDays.toISOString());
  const getExerTypes = function(workoutD) {
    const result = {};
    workoutD.map((item) => { 
      if(!result[item.exercises_id]) {
        result[item.exercises_id] = {
          type: getTypeExercise(state, item),
          id: item.exercises_id,
          sets: []
        };
      }

      result[item.exercises_id].sets.push(item)
    })
    return Object.values(result);
  }

  console.log("currentDayExercise", currentDayExercise);
  const currentUserExercises = getExerTypes(currentDayExercise);
  console.log("currentUserExercises", currentUserExercises);
  */
  const reset = function() {
    setExerciseType("");
  }

  const createExercise = function(exercise) {
    addExercise(exerciseType)
    reset();
  }


  return (
    <section>
      <Nav />
      {/* <div id="app-modal"/> */}

      <div style={{display: "flex", padding: "5% 0 0 5%" }}>
        <Link to="/day">
          <KeyboardBackspaceIcon className={classes.backButton} />
        </Link>
      </div>


      <h1 style={{marginTop: 0}}>Select Exercise:</h1> 
      <div>
        {currentDayExercise.map(item => <div className={classes.excButton} key={item.id}> <Link style={{ textDecoration: "none" }} to={`/counter/${item.id}`} > <button className="button-29" >{item.type}</button></Link></div>)}
      </div>

      {/* <form autoComplete='off' onSubmit={event => event.preventDefault()} className={classes.addEx} > */}
        {/* <Link to="/exercises">
          <Fab size="medium" aria-label="add" className={classes.addButton} onClick={() => console.log(exerciseType)}>
            <AddIcon />
          </Fab>
        </Link> */}
        {/* <label htmlFor="exercise"><Typography>Add Exercise</Typography></label> */}
        {/* <input type="exercise" id="exercise" name="exercise" value={exerciseType} onChange={(event) => setExerciseType(event.target.value)} /> */}
      {/* </form> */}

      <FormDialog>
     {/* <form autoComplete='off' onSubmit={event => event.preventDefault()} className={classes.addEx} >
        <label htmlFor="exercise"><Typography>Add Exercise</Typography></label>
        <input type="exercise" id="exercise" name="exercise" value={exerciseType} onChange={(event) => setExerciseType(event.target.value)} />
        <button onClick={() => console.log("exerciseType", exerciseType)}>Add Exercise</button>
      </form> */}
      
      </FormDialog>

      <BottomNav />

    </section>
  );

}

export default ExercisesList;