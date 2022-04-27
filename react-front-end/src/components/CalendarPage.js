import React from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';
import BottomNav from './BottomNav';
import Nav from './Nav';
import { Fab } from '@material-ui/core';

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
  const [value, setValue] = React.useState(0);

  return (
    <section>
      <Nav />

      <Calendar />
      
        <Fab size="large" variant="extended" className={classes.dateButton} href="/empty" >
          SELECT DATE
        </Fab>

      <BottomNav />

    </section>
  );

}

export default CalendarPage;