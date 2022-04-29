import React, {useContext,useState,useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Link, useNavigate, useParams } from "react-router-dom"
import DayListItem from './DayListItem';
import { makeStyles, Paper, Box, Typography, Fab } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BottomNav from './BottomNav';
import Nav from './Nav';
import EditIcon from '@material-ui/icons/Edit';
import ExerciseContext from './ExerciseContext';
import {getWorkoutsForUser, getAllWorkoutsForDay, getAllExerciseTypes, getTypeExercise} from "../helpers/selectors";

const useStyles = makeStyles((theme) => ({
  date: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  root: {
    "& > *": {
      margin: "auto",
      width: "75%",
      height: "auto",
    }
  },
  paper: {
    // border: "solid",
    // borderRadius: 25,
    backgroundColor: "lightgray"
  },
  box: {
    // border: "solid"
  },
  text: {
    paddingBottom: 20,
    paddingLeft: 10,
    textAlign: "left"
  },
  addExc: {
    display: "flex",
    position: "fixed",
    bottom: "70px",
    margin: "2%",
    alignItems: "center"
  },
  addButton: {
    margin: 10,
    color: "black",
    backgroundColor: "DeepSkyBlue"
  }
}));

// const dayEx = [
//   {
//     type: "Deadlift",
//     id: 1,
//     sets: [
//       {
//         reps: 10,
//         weight: 100
//       }
//     ]
//   },
//   {
//     type: "Bench Press",
//     id: 2,
//     sets: [
//       {
//         reps: 10,
//         weight: 80
//       },
//       {
//         reps: 10,
//         weight: 80
//       }
//     ]
//   }
// ]

const dayEx = [
  {
    type: "Deadlift",
    id: 1,
    sets: [
      {
        reps: 5,
        weight: 180
      },
      {
        reps: 5,
        weight: 180
      },
      {
        reps: 5,
        weight: 190
      },
      {
        reps: 5,
        weight: 190
      },
      {
        reps: 2,
        weight: 200
      }
    ]
  }
]


function Day(props) {

  const classes = useStyles();
  const params = useParams();
  let emptyRoom = false;
  console.log("params", params.date)
  const objDate = new Date(params.date);
  console.log("obj params date", objDate.toISOString());
  //const [repType, setRepType] = useState([]);
  const {exercises, setExercises, day2, setDay2,state} = useContext(ExerciseContext);
  const dailyWorkout = getAllWorkoutsForDay(state, objDate.toISOString());
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
  console.log("daily workout", dailyWorkout);
  const dayExercise = getExerTypes(dailyWorkout);
  console.log("day exercises", dayExercise);
 if(dayExercise.length < 1) {
   emptyRoom = true;
 }
   
  
  const exList = dayExercise.map((ex) =>{
    const setList = ex.sets.map((set, index) => <DayListItem key={index} index={index +1} {...set} />)
    return (<div key={ex.id}><h4>{ex.type}</h4>{setList}</div>)
  })

  

  console.log("day2:", day2);

  return (
    <section className="day">
      <Nav />

      <div className={classes.date} >
        <Link to="/back">
        <ArrowBackIosIcon />
        </Link>
        <h3>{objDate.toISOString().slice(0,10)}</h3>
        
        <Link to="/empty">
        <ArrowForwardIosIcon />
        </Link>
      </div>
      
      {emptyRoom === true && <div className={classes.root}>
        <Paper className={classes.paper} elevation={5}>
          <Box className={classes.box} p={1}>
            <Typography className={classes.text}> NO WORKOUT RECORDED</Typography>
          </Box>
        </Paper>
      </div>}

      {emptyRoom === false && <div className={classes.root}>
        <Paper className={classes.paper} elevation={5}>
          <Box className={classes.box} p={1}>
            <Typography className={classes.text} >{exList}</Typography>
            <div style={{paddingLeft: 10}} className={classes.text}>
              <EditIcon /> Notes
            </div>
          </Box>
        </Paper>
      </div>}

      

      <div className={classes.addExc}>
        <Link to={`/exercises/${params.date}`}>
          <Fab size="medium" aria-label="add" className={classes.addButton}>
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