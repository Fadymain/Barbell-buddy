import React from 'react';

const useStyles = makeStyles((theme) => ({
  maybe {
    margin: 0,
    padding: 0,
    border: none,
    outline: none,
    transition: "all 0.15s;"
    position: absolute, top:0, bottom:0, right:0, left:0, 
    background: radial-gradient(circle, #34495e 0%, #333 100%);
    padding-top: 50px;
  },
  button{
    font-size: 80px;
    font-family: Raleway;
    line-height: 80px;
    padding: .618em 1em;
    border-radius: 10px 10px 12px 12px;
    box-shadow:
      0px 8px 0px 0px #2980b9, /* button thickness */
      0px 0 20px rgba(255,255,255,.2) inset, /* inner glow */
      2px 30px 0px rgba(255,255,255,.1) inset, /* sublte reflection */
      5px 15px 30px -10px #000; /* dark shadow underneath */
    border: 1px solid #2980b9;
    cursor: pointer;
    background: #3498db;
    color: #ecf0f1;
    text-shadow: 1px 1px 1px #34495e;
    transform: rotateX(5deg);
    margin: 10px 10px;
    width: 280px;
    text-align: left;
  }
}));







const SetButton = () => {

  const classes = useStyles();

    return (

      <div className={classes.maybe}>
        <button>
          Set Done
        </button>
      </div>

    );
  
}

export default SetButton;