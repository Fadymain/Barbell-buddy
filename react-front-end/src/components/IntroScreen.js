import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontFamily: "Gill Sans",
    fontSize: "60px"
  },
  subheading: {
    fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial',
    padding: 20
  }
}));


function IntroScreen() {

  const classes = useStyles();

  return (
      <section onClick={event => window.location.href = '/calendar'}>
        <h1 className={classes.headerText} >Barbell <br/>Buddy</h1>
        <img
          src="images/barbell.png"
          className="barbell"
          alt="barbell"
          style={{ height: "200px"}}
        />
        <h2 className={classes.subheading} >WEIGHTLIFTING TRACKER</h2>
      </section>
  );

}

export default IntroScreen;