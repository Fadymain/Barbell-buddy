import React, { useState } from 'react';
import plateCalculator from 'plate-calculator';

import {Link} from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import PlateListItem from './PlateListItem';

function PlateCalculator(props) {

  const [weight, setWeight] = useState(0);
  const [calc, setCalc] = useState({});


  const completeCalc = function(weight) {
    // debugger
    setCalc(plateCalculator.calculate(weight))
    // console.log("array:", [...calc, weight])
    // console.log("test:", plateCalculator.calculate(weight))
  }


  // console.log("plateCalculator::", plateCalculator);
  console.log(plateCalculator.calculate(200));

  // const plateCalc = plateCalculator.calculate(200);
  const plateCalc = function(weight) {
    plateCalculator.calculate(weight);
  }

  // const plateCalc = plateCalculator.calculate(props.weight);

  // plateCalc.plates.map((plate) => console.log("plate:",plate));
  // plateCalc.plates.plateWeight.map((plate) => console.log("plate:",plate));



  // const plateWeight = plateCalc.plates[0].plateWeight;
  // const plateQty = plateCalc.plates[0].qty / 2;

  // const closest = plateCalc.closestWeight;
  // // console.log("closest", closest);

  return (
    <section>

      <Link to="/counter">
        <KeyboardBackspaceIcon />
      </Link>

      <h2>Plate Calculator</h2>

      <div>
        <form autoComplete='off' onSubmit={event => event.preventDefault()}>
          <label for="weight">WEIGHT (lb):</label>
          <input type="text" id="weight" name="weight" onChange={(event) => setWeight(event.target.value)} value={weight} />
          <label for="barbell">BARBELL:</label>
          <input type="text" id="barbell" name="barbell" /><br />
          <button>
            <img
              onClick={() => setCalc(plateCalculator.calculate(weight))}
              src="images/calculate.png"
              className="save"
              alt="save"
            />
          </button>
        </form>
      </div>

      <div>
        <h2>Closest weight: {calc.closestWeight}</h2>
        <ul>
          {calc.plates && calc.plates.map((plates, index) => console.log("plates and index:", plates, index))}
          {calc.plates && calc.plates.map((plates, index) => <PlateListItem key={index} weight={plates.plateWeight} qty={plates.qty / 2 } />)}
        </ul>
        {/* <h2>Plate Weight: {plateWeight}</h2>
        <h2>Plates/side: {plateQty}</h2> */}
      </div>

    </section>
  );

}

export default PlateCalculator;