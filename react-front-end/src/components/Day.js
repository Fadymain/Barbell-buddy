import React from 'react';

function Day(props) {

  return (
      <section className="day">
        <button>Back</button>
        <h3>Thurdsday April 28th, 2022</h3>
        <p>Squats<br/>
          Set 1 - 20 Reps @ 45lb<br/>
          Set 2 - 15 Reps @ 90lb<br/>
          Set 3 - 10 Reps @ 135lb<br/>
          Set 4 - 10 Repd @ 135lb<br/>
          Deadlift<br/>
          Set 1 - 5 Reps @ 135lb<br/>
          Set 2 - 5 Reps @ 135lb<br/>
          Set 3 - 5 Reps @ 185lb
        </p>
        <div>
          <button>+</button>
          <h3>ADD TO DAY'S WORKOUT</h3>
        </div>
      </section>
  );

}

export default Day;