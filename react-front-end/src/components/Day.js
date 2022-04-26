import React from 'react';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import NavigationIcon from '@material-ui/icons/Navigation';
import { Link } from "react-router-dom"
import DayListItem from './DayListItem';
import { makeStyles, Paper, Box, Typography } from '@material-ui/core';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// import { Paper, Box, Typography } from '@material-ui/core';

import BottomNav from './BottomNav';



const useStyles = makeStyles((theme) => ({
  row: {display: 'flex', flexDirection: 'row'},
  backButton: {display: 'flex'},
  date: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
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
  workout: {
    // backgroundColor: "red"
  },
  root: {
    "& > *": {
      margin: "auto",
      width: "75%",
      height: "auto",
    }
  },
  workout: {
    borderRadius: 25,
    backgroundColor: "lightgray"
  }
}));

const dayEx = [{
  type: "Deadlift", id: 1,
  sets: [{
    reps: 10,
    weight: 100
  }]
},
{
  type: "Bench Press", id: 2,
  sets: [{
    reps: 10,
    weight: 80
  }, {   reps: 10,
    weight: 80}]
}]


function Day(props) {

  const classes = useStyles();

  const exList = dayEx.map((ex) =>{
    const setList = ex.sets.map((set, index) => <DayListItem key={index} {...set} />)
    return (<div key={ex.id}><h4>{ex.type}</h4>{setList}</div>)
  })

  return (
    <section className="day">
      <div className={classes.backButton}>
        {/* change onClick value */}
        <Link to="/calendar">
          <KeyboardBackspaceIcon onClick={event => window.location.href = '/calendar'} />
        </Link>
        {/* get date from Calendar page? */}
      </div>

      <div className={classes.date} >
        <ArrowBackIosIcon />
        <h3>Thurdsday April 28th, 2022</h3>
        <ArrowForwardIosIcon />
      </div>
      
      {/* <Paper>
      <div className={classes.workout} >
        {exList}
      </div>
      </Paper> */}

      <div className={classes.root}>
      <Paper className={classes.workout} elevation={5}>
        <Box p={1}>
          <Typography variant="h5">{exList}</Typography>
        </Box>
      </Paper>
    </div>
      

      

      <div className={classes.row}>
        <Link to="/exercises">
          <Fab size="small" aria-label="add" className={classes.addButton}>
            <AddIcon />
          </Fab>
        </Link>
        <h3>ADD TO DAY'S WORKOUT</h3>
      </div>

      <BottomNav />

    </section>
  );

}

export default Day;