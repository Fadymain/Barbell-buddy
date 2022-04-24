import React from 'react';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import NavigationIcon from '@material-ui/icons/Navigation';

import {Link} from "react-router-dom"

import DayListItem from './DayListItem';


function Day(props) {

  return (
      <section className="day">

        <Link to="/calendar">
          <KeyboardBackspaceIcon onClick={event =>  window.location.href='/calendar'} />
        </Link>


        {/* get date from Calendar page? */}
        <h3>Thurdsday April 28th, 2022</h3>

        <DayListItem/>

        <div>
        <Link to="/exercises">
          <Fab size="small" color="secondary" aria-label="add" >
            <AddIcon />
          </Fab>
        </Link>

          <h3>ADD TO DAY'S WORKOUT</h3>
        </div>

      </section>
  );

}

export default Day;