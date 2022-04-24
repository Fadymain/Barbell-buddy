import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

const DayListItem = (props) => {

  const classes = useStyles();

  return (

    <section classname="savedExc">

      <Card className={classes.root} variant="outlined">
        <CardContent>

          <Typography variant="h5" component="h2">
            Squats
          </Typography>

          <Typography variant="body2" component="p">
            Set 1 - 20 Reps @ 45lb<br />
            Set 2 - 15 Reps @ 90lb<br />
            Set 3 - 10 Reps @ 135lb<br />
            Set 4 - 10 Repd @ 135lb<br />
          </Typography>
        </CardContent>
      </Card>

      {/* <Card className={classes.root} variant="outlined">
        <CardContent>

          <Typography variant="h5" component="h2">
            Deadlift
          </Typography>

          <Typography variant="body2" component="p">
            Set 1 - 5 Reps @ 135lb<br />
            Set 2 - 5 Reps @ 135lb<br />
            Set 3 - 5 Reps @ 185lb
          </Typography>
        </CardContent>
      </Card> */}

    </section>

  )

}

export default DayListItem;