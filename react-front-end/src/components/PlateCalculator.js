import React from 'react';

function PlateCalculator(props) {

  return (
      <section>
        <button>Back</button>

        <h2>Plate Calculator</h2>

        <div>
          <form action="/platecalc" method="POST">
              <label for="weight">WEIGHT (lb):</label>
              <input type="text" id="weight" name="weight"/>
              <label for="barbell">BARBELL:</label>
              <input type="text" id="barbell" name="barbell"/><br/>
            <input type="submit" value="CALCULATE"/>
          </form>
        </div>

        <div>
          <h3>Plate Weight</h3>
          <h3>Plates/Side</h3>
        </div>
      </section>
  );

}

export default PlateCalculator;