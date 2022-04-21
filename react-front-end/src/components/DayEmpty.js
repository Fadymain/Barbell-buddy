import React from 'react';
// import InterviewerListItem from "./InterviewerListItem"
// import "./InterviewerList.scss"

function DayEmpty(props) {

  return (
      <section className="day">
        <button>Back</button>
        <h3>Thurdsday April 28th, 2022</h3>
        <p>NO WORKOUT RECORDED</p>
        <div>
          <button>+</button>
          <h3>ADD TO DAY'S WORKOUT</h3>
        </div>
      </section>
  );

}

export default DayEmpty;