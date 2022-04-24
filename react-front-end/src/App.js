import React, { useState } from 'react';
import useApplicationData from './hooks/useApplicationData';
import './App.css';
import IntroScreen from './components/IntroScreen';
import Login from './components/Login';
import CalendarPage from './components/CalendarPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Day from './components/Day';
import DayEmpty from './components/DayEmpty';
import ExercisesList from './components/ExercisesList';
import Counter from './components/Counter';
import PlateCalculator from './components/PlateCalculator';

const App = () => {

  const {state} = useApplicationData();

  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   }) 
  // }

  return (
    <div className="App">
      <h1>{"Barbell Buddy App component"}</h1>
      {/* <button onClick={this.fetchData} > */}
      {/* Fetch Data
        </button>     */}
      {/* <Button/>     */}
      <Router>
        <Routes>
          <Route path="/" element={<IntroScreen />} />
          <Route path="/intro" element={<IntroScreen />} />
          <Route path="/day" element={<Day />} />
          <Route path="/dayempty" element={<DayEmpty />} />
          <Route path="/exercises" element={<ExercisesList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/platecalc" element={<PlateCalculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;