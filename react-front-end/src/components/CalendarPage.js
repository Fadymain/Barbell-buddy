import React from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function CalendarPage() {

  return (
      <section>
        <Calendar/>
        <button href="/calendar" >SELECT DATE</button>
      </section>
  );

}

export default CalendarPage;