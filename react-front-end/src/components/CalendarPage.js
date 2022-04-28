import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';
import BottomNav from './BottomNav';
import Nav from './Nav';
import { Fab } from '@material-ui/core';
import ExerciseContext from './ExerciseContext';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  dateButton: {
    margin: 20,
    color: "black",
    backgroundColor: "DeepSkyBlue"
  },
}));

function CalendarPage() {

  const classes = useStyles();
  const [day, setDay] = useState(new Date());
  const {day2, setDay2} = useContext(ExerciseContext);

  console.log("day:", day2);
  return (
    <section>
      <Nav />

      <Calendar allowPartialRange={false} onChange={setDay2} value={day2} />
      
      <Link to="/day">
        <Fab size="large" variant="extended" className={classes.dateButton} >
          SELECT DATE
        </Fab>
      </Link>

      <BottomNav />

    </section>
  );

}

export default CalendarPage;