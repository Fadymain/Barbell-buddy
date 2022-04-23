import React from 'react';
import "./OpeningScreen.css"

function OpeningScreen() {

  return (
      <section>
        <h1>Barbell Buddy</h1>
        <img
          src="images/diag_blue_barbell.png"
          className="opening"
          alt="opening"
        />
        <h2>WEIGHTLIFTING TRACKER</h2>
      </section>
  );

}

export default OpeningScreen;