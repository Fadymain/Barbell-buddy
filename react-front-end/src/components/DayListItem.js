import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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
  }
});


const DayListItem = (props) => {

  const classes = useStyles();

  return (

    <section className={classes.savedExc}>

      <Typography variant="body2" component="p">
        Set {props.index} - {props.reps} Reps @ {props.weight} lbs
      </Typography>


    </section>

  )

}

export default DayListItem;