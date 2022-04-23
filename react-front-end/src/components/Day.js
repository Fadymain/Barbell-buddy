import React from 'react';

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Day(props) {

  const classes = useStyles();

  return (
      <section className="day">
        <ArrowBackIosRoundedIcon/>
        <h3>Thurdsday April 28th, 2022</h3>
        <p>Squats<br/>
          Set 1 - 20 Reps @ 45lb<br/>
          Set 2 - 15 Reps @ 90lb<br/>
          Set 3 - 10 Reps @ 135lb<br/>
          Set 4 - 10 Repd @ 135lb<br/>
          Deadlift<br/>
          Set 1 - 5 Reps @ 135lb<br/>
          Set 2 - 5 Reps @ 135lb<br/>
          Set 3 - 5 Reps @ 185lb
        </p>
        <div>
          <button>+</button>
          <h3>ADD TO DAY'S WORKOUT</h3>

        <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>

        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          Squats
        </Fab>

        </div>
      </section>
  );

}

export default Day;