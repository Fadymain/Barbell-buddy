import React from 'react';

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
            <input onClick={() => console.log("counter button was clicked")} type="submit" value="SET COMPLETED"/>
          </form>
        </div>

        <div>
          <h3>Completed Sets</h3>
          <ul>
            <li>Set 1 - 20 Reps @ 45lb</li>
            <li>Set 2 - 15 Reps @ 90lb</li>
            <li>Set 3 - 10 Reps @ 115lb</li>
            <li>Set 4 - 10 Reps @ 135lb</li>
          </ul>
          <button>Edit</button>
          <button>SAVE</button>
        </div>
      </section>
  );

}

export default Counter;