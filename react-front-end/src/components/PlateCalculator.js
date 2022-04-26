import React, { useState } from 'react';
import plateCalculator from 'plate-calculator';
import { Link } from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import PlateListItem from './PlateListItem';
import "./PlateCalculator.css"
import BottomNav from './BottomNav';
import Nav from './Nav';
import { makeStyles, Paper, Box, Typography, Fab } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "auto",
      width: "75%",
      height: "auto",
    }
  },
  paper: {
    // borderRadius: 25,
    backgroundColor: "lightgray"
  },
  text: {
    // textAlign: "left",
  }
}));


function PlateCalculator(props) {

  const [weight, setWeight] = useState("");
  const [calc, setCalc] = useState({});

  const completeCalc = function(weight) {
    // debugger
    setCalc(plateCalculator.calculate(weight))
  }

  const plateCalc = function(weight) {
    plateCalculator.calculate(weight);
  }

  const classes = useStyles();

  return (
    <section>
      <Nav />

      <div style={{ display: "flex", padding: "5% 0 0 5%" }}>
        <Link to="/counter/1">
          <KeyboardBackspaceIcon style={{ color: "black" }} />
        </Link>
      </div>

      <h2 style={{ marginTop: 0}} >Plate Calculator</h2>

      <div>
        <form autoComplete='off' onSubmit={event => event.preventDefault()}>

          <label for="weight">WEIGHT (lbs):</label>
          <input size="4" type="text" id="weight" name="weight" onChange={(event) => setWeight(event.target.value)} value={weight} /><br/>
          <label for="barbell">BARBELL:</label>
          <input size="2" type="text" id="barbell" name="barbell" placeholder="45"/><br/>
          {/* <div>BARBELL - DEFAULT 45lbs</div> */}
            {/* <img
              onClick={() => setCalc(plateCalculator.calculate(weight))}
              src="images/calculate.png"
              className="save"
              alt="save"
            /> */}
            <button onClick={() => setCalc(plateCalculator.calculate(weight))} class='calc-button' >Calculate</button>
        </form>
      </div>



      <div style={{padding: 20}} className={classes.root}>
        <Paper className={classes.paper} elevation={5}>
          <Box p={1}>
            <h3>Closest weight:<br />{calc.closestWeight}</h3>
            <h3>Plates/side:</h3>
            <Typography className={classes.text}>{calc.plates && calc.plates.map((plates, index) => <PlateListItem key={index} weight={plates.plateWeight} qty={plates.qty / 2} />)}</Typography>
          </Box>
        </Paper>
      </div>

      <BottomNav />

    </section>
  );

}

export default PlateCalculator;