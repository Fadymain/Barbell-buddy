import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom"
import DayListItem from './DayListItem';
import { makeStyles, Paper, Box, Typography, Fab } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BottomNav from './BottomNav';
import Nav from './Nav';
import EditIcon from '@material-ui/icons/Edit';



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

  const exList = dayEx.map((ex) =>{
    const setList = ex.sets.map((set, index) => <DayListItem key={index} index={index +1} {...set} />)
    return (<div key={ex.id}><h4>{ex.type}</h4>{setList}</div>)
  })

  return (
    <section className="day">
      <Nav />

      <div className={classes.date} >
        <ArrowBackIosIcon onClick={() => window.location.href = '/back'}/>
        <h3>Thurdsday April 28th, 2022</h3>
        {/* <h3>Wednesday April 27th, 2022</h3> */}
        <ArrowForwardIosIcon onClick={() => window.location.href = '/empty'} />
      </div>
      
      {/* <Paper>
      <div className={classes.workout} >
        {exList}
      </div>
      </Paper> */}

      <div className={classes.root}>
        <Paper className={classes.paper} elevation={5}>
          <Box className={classes.box} p={1}>
            <Typography className={classes.text} >{exList}</Typography>
            <div style={{paddingLeft: 10}} className={classes.text}>
              <EditIcon /> Notes
            </div>
          </Box>
        </Paper>
      </div>

      <div className={classes.addExc}>
        <Link to="/exercises">
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