import React, { useContext, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ExerciseContext from './ExerciseContext';
import "./ExerciseList.css"
import BottomNav from './BottomNav';
import Nav from './Nav';
import { makeStyles, Fab, Typography } from '@material-ui/core';
import FormDialog from './FormDialog';
import {getWorkoutsForUser, getAllWorkoutsForDay, getAllExerciseTypes, getTypeExercise, getUniqueExercise} from "../helpers/selectors";



const useStyles = makeStyles((theme) => ({
  addButton: {
    margin: 10,
    color: "black",
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
    padding: 5
  }
}));




function ExercisesList(props) {

  const classes = useStyles();
 
  const {exercises, setExercises, day2, setDay2, state, addExercise} = useContext(ExerciseContext);
 
  const [ exerciseType, setExerciseType ] = useState("");
  const currentDayExercise = getUniqueExercise(state);
  
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


      <FormDialog>
     
      
      </FormDialog>

      <BottomNav />

    </section>
  );

}

export default ExercisesList;