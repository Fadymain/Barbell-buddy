import React from 'react';
import "./IntroScreen.css"

function IntroScreen() {

  return (
      <section>
        <h1 className="intro">Barbell <br/>Buddy</h1>
        <img
          src="images/diag_blue_barbell.png"
          className="intro"
          alt="intro"
        />
        <h2>WEIGHTLIFTING TRACKER</h2>
      </section>
  );

}

export default IntroScreen;