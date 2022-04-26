import React, { useState } from 'react';
import plateCalculator from 'plate-calculator';
import { Link } from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import PlateListItem from './PlateListItem';
import "./PlateCalculator.css"
import BottomNav from './BottomNav';
import Nav from './Nav';

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

  return (
    <section>
      <Nav />
      
      {/* goes back to counter for Deadlifts */}
      <Link to="/counter/1">
        <KeyboardBackspaceIcon />
      </Link>

      <h2>Plate Calculator</h2>

      <div>
        <form autoComplete='off' onSubmit={event => event.preventDefault()}>
          <label for="barbell">BARBELL:</label>
          <input type="text" id="barbell" name="barbell" placeholder="DEFAULT 45lbs"/><br/>
          <label for="weight">WEIGHT (lbs):</label>
          <input type="text" id="weight" name="weight" onChange={(event) => setWeight(event.target.value)} value={weight} /><br/>
            {/* <img
              onClick={() => setCalc(plateCalculator.calculate(weight))}
              src="images/calculate.png"
              className="save"
              alt="save"
            /> */}
            <button onClick={() => setCalc(plateCalculator.calculate(weight))} class='calc-button' >Calculate</button>
        </form>
      </div>

      <div>
        <h3>Closest weight:<br/>{calc.closestWeight}</h3>
        <div>
          <h3>Plates/side:</h3>
          <ul>
            {/* {calc.plates && calc.plates.map((plates, index) => console.log("plates and index:", plates, index))} */}
            {calc.plates && calc.plates.map((plates, index) => <PlateListItem key={index} weight={plates.plateWeight} qty={plates.qty / 2} />)}
          </ul>
        </div>
      </div>

      <BottomNav />

    </section>
  );

}

export default PlateCalculator;