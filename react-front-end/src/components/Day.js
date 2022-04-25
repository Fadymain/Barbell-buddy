import React from 'react';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import NavigationIcon from '@material-ui/icons/Navigation';
import { Link } from "react-router-dom"
import DayListItem from './DayListItem';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  row: {display: 'flex', flexDirection: 'row'},
  backButton: {display: 'flex'}
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

  const exList = dayEx.map((ex) =>{
    const setList = ex.sets.map((set, index) => <DayListItem key={index} {...set} />)
    return (<div key={ex.id}><h4>{ex.type}</h4>{setList}</div>)
  })

  const classes = useStyles();

  return (
    <section className="day">
      <div className={classes.backButton}>
        {/* change onClick value */}
        <Link to="/calendar">
          <KeyboardBackspaceIcon onClick={event => window.location.href = '/calendar'} />
        </Link>
        {/* get date from Calendar page? */}
      </div>

      <h3>Thurdsday April 28th, 2022</h3>

      {exList}

      <div className={classes.row}>
        <Link to="/exercises">
          <Fab size="small" color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
        <h3>ADD TO DAY'S WORKOUT</h3>
      </div>

    </section>
  );

}

export default Day;