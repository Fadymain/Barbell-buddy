import React from 'react';
// import InterviewerListItem from "./InterviewerListItem"
// import "./InterviewerList.scss"

function Counter(props) {

  return (
      <section>
        <button>
          Back
        </button>

        <h2>Deadlift</h2>

        <div>
          <h3>WEIGHT (lb):</h3>
          <h3>REPS:</h3>
          <form action="/counter" method="post">
            <div>
              <label for="weight">WEIGHT (lb):</label><br/>
              <input type="text" id="weight" name="weight"/>
            </div>
            <div>
              <label for="reps">REPS:</label><br/>
              <input type="text" id="reps" name="reps"/>
            </div>
            <input type="submit" value="SET COMPLETED"/>
          </form>
        </div>

        <div>
          <h3>Completed Sets:</h3>
          <h6>Set 1 - 20 Reps @ 45lb</h6>
          <button>Edit</button>
          <button>SAVE</button>
        </div>
      </section>
  );

}

export default Counter;