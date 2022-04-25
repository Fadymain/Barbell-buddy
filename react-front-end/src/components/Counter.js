import React, {useContext, useState} from 'react';
import CounterListItem from './CounterListItem';
import "./Counter.css"

import {Link, useParams} from "react-router-dom"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
// import EditSharpIcon from '@material-ui/icons/EditSharp';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import ExcerciseContext from './ExercsiseContext';

function Counter(props) {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [completed, updateCompleted] = useState([]);
  const exercises = useContext(ExcerciseContext);

  const params = useParams();
  const exercise = exercises.find((item) => item.id == params.id)

  console.log("params", params);
  console.log("exercise", exercise);


  const updateRep = function(rep, weight) {
    // debugger
    if(!rep && !weight) {
      return;
    }
    setReps(rep);
    setWeight(weight);
  }

  const completeSet = function(set) {
    // debugger
    updateCompleted([...completed, set])
  }

  

  return (
      <section>
      <Link to="/exercises">
        <KeyboardBackspaceIcon />
      </Link>

        <h2>{exercise.type}</h2>

        <img
          src="images/plateCalc.png"
          className="plateCalc"
          alt="plateCalc"
        />

        <div>
          <form autoComplete='off' onSubmit={event => event.preventDefault()}>
            <div>
              <label htmlFor="weight">WEIGHT (lbs):</label><br/>
              <input type="text" id="weight" name="weight" onChange={(event) => updateRep(reps, event.target.value)}/>
            </div>
            <div>
              <label htmlFor="reps">REPS:</label><br/>
              <input type="text" id="reps" name="reps" onChange={(event) => updateRep(event.target.value, weight)}/>
            </div>
            {/* <input onClick={() => completeSet({reps, weight})} type="submit" value="SET COMPLETED"/> */}
            <img
              onClick={() => completeSet({reps, weight})}
              src="images/counterButton.png"
              className="counterButton"
              alt="counterButton"
            />
          </form>
        </div>

      <div>
        <h3>Completed Sets:</h3>
        <ul>
          {completed.map((set, index) => <CounterListItem key={index} index={index + 1} rep={set.reps} weight={set.weight} />)}
        </ul>

        <img
          src="images/edit.png"
          className="edit"
          alt="edit"
        />

        <img
          src="images/save.png"
          className="save"
          alt="save"
        />
      </div>

      </section>
  );

}

export default Counter;