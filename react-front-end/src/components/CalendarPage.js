import React from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import BottomNav from './BottomNav';
import Nav from './Nav';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function CalendarPage() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <section>
      <Nav />

      <Calendar />
      
      <Link to="/day">
        <button>SELECT DATE</button>
      </Link>

      <BottomNav />

    </section>
  );

}

export default CalendarPage;