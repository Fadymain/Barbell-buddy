import React from 'react';
// import InterviewerListItem from "./InterviewerListItem"
// import "./InterviewerList.scss"

function Counter(props) {

  return (
      <section>
        <button>Back</button>

        <h2>Deadlift</h2>

        <div>
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
          <h3>Completed Sets</h3>
          <ul>
            <li>Set 3 - 20 Reps @ 135lb</li>
            <li>Set 2 - 20 Reps @ 90lb</li>
            <li>Set 1 - 20 Reps @ 45lb</li>
          </ul>
          <button>Edit</button>
          <button>SAVE</button>
        </div>
      </section>
  );

}

export default Counter;