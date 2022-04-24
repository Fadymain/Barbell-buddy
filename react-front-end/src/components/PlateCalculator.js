import React from 'react';
import plateCalculator from 'plate-calculator';

import {Link} from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function PlateCalculator(props) {

  console.log("plateCalculator::", plateCalculator);
  console.log(plateCalculator.calculate(200));
  const plateCalc = plateCalculator.calculate(200);
  const plateWeight = plateCalc.plates[0].plateWeight;
  const plateQty = plateCalc.plates[0].qty / 2;
  const closest = plateCalc.closestWeight;

  return (
    <section>

      <Link to="/counter">
        <KeyboardBackspaceIcon />
      </Link>

      <h2>Plate Calculator</h2>

      <div>
        <form action="/platecalc" method="POST">
          <label for="weight">WEIGHT (lb):</label>
          <input type="text" id="weight" name="weight" />
          <label for="barbell">BARBELL:</label>
          <input type="text" id="barbell" name="barbell" /><br />
          <img
            onClick={() => plateCalc}
            src="images/calculate.png"
            className="save"
            alt="save"
          />
        </form>
      </div>

      <div>
        <h2>Closest weight: {closest}</h2>
        <h2>Plate Weight: {plateWeight}</h2>
        <h2>Plates/side: {plateQty}</h2>
      </div>

    </section>
  );

}

export default PlateCalculator;