import React from 'react';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }));

function Day(props) {

  const classes = useStyles();

  return (
      <section className="day">
        <KeyboardBackspaceIcon/>
        <h3>Thurdsday April 28th, 2022</h3>

        <section classname="savedExc">
          <Card className={classes.root} variant="outlined">
            <CardContent>

              <Typography variant="h5" component="h2">
                Squats
              </Typography>

              <Typography variant="body2" component="p">
              Set 1 - 20 Reps @ 45lb<br/>
              Set 2 - 15 Reps @ 90lb<br/>
              Set 3 - 10 Reps @ 135lb<br/>
              Set 4 - 10 Repd @ 135lb<br/>
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.root} variant="outlined">
            <CardContent>

              <Typography variant="h5" component="h2">
                Deadlift
              </Typography>

              <Typography variant="body2" component="p">
              Set 1 - 5 Reps @ 135lb<br/>
              Set 2 - 5 Reps @ 135lb<br/>
              Set 3 - 5 Reps @ 185lb
              </Typography>
            </CardContent>
          </Card>
        </section>
        

        <div>
          <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
            <AddIcon />
          </Fab>
          <h3>ADD TO DAY'S WORKOUT</h3>
        </div>

      </section>
  );

}

export default Day;