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
import { makeStyles, Paper, Box, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  saveButton: {
    // margin: 10,
    color: "black",
    backgroundColor: "LimeGreen"
  },
  root: {
    "& > *": {
      margin: "auto",
      width: "70%",
      height: "auto",
      // textAlign: "left",
      // justifyContent: "center"
    }
  },
  sets: {
    // borderRadius: 25,
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "center"
  },
  inputs: {
    display: "flex",
    justifyContent: "center"
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
      <div className='inner-content'>

        <div style={{ display: "flex", padding: "5% 0 0 5%" }}>
          <Link to="/exercises">
            <KeyboardBackspaceIcon style={{ color: "black" }} />
          </Link>
        </div>

        <h2 style={{ marginTop: 0 }} >{exercise.type}</h2>

        <Link to="/platecalc">
          <button className="button-85"  >Plate Calculator</button>
        </Link>

        <form style={{ padding: 10 }} autoComplete='off' onSubmit={event => event.preventDefault()}>
          <div className={classes.inputs} >
            <div style={{ paddingRight: 50 }}>
              <label htmlFor="weight">WEIGHT (lbs):</label><br />
              <input size="5" type="text" id="weight" name="weight" onChange={(event) => updateRep(reps, event.target.value)} />
            </div>
            <div>
              <label htmlFor="reps">REPS:</label><br />
              <input size="5" type="text" id="reps" name="reps" onChange={(event) => updateRep(event.target.value, weight)} />
            </div>
          </div>
          {/* <input onClick={() => completeSet({reps, weight})} type="submit" value="SET COMPLETED"/> */}
          {/* <button onClick={() => completeSet({ reps, weight })} className="button-72" >SET DONE</button> */}
          <button onClick={() => completeSet({ reps, weight })} className="set-button" >SET DONE</button>
        </form>

        <div className={classes.root}>
          <Paper className={classes.sets} elevation={5}>
            <Box p={1}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                <h3>Completed Sets:</h3>
                <EditIcon style={{ paddingLeft: 10 }} ></EditIcon>
              </div>
              <ul style={{ listStyleType: "none", paddingInlineStart: 0 }} >
                {completed.map((set, index) => <CounterListItem key={index} index={index + 1} rep={set.reps} weight={set.weight} />)}
              </ul>
            </Box>
          </Paper>
        </div>

        <div className="saveButton" style={{ position: "fixed", right: "10px", bottom: "70px", }} >
          <Fab variant="extended" size="small" aria-label="SAVE" className={classes.saveButton} onClick={() => window.location.href = '/day'}>
            <DoneIcon /> SAVE
          </Fab>
        </div>

      </div>
      <BottomNav />
    </section>
  );

}

export default Counter;