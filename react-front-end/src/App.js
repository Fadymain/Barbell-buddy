import React, { useState } from 'react';
import useApplicationData from './hooks/useApplicationData';
import './App.css';
import IntroScreen from './components/IntroScreen';
import Login from './components/Login';
import CalendarPage from './components/CalendarPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Day from './components/Day';
import ExercisesList from './components/ExercisesList';
import Counter from './components/Counter';
import PlateCalculator from './components/PlateCalculator';
import ExerciseContext from './components/ExerciseContext';
import Nav from './components/Nav';

const exercisesData = [
  { type: "Deadlifts", id: 1},
  { type: "Squats", id: 2 },
  { type: "Bench Press", id: 3 },
  { type: "Lunges", id: 4 },
  { type: "Overhead Press", id: 5 },
];

const App = () => {

  const {state} = useApplicationData();
  const [exercises, setExercises] = useState(exercisesData)

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
      {/* <h1>{"Barbell Buddy App component"}</h1> */}
      {/* <button onClick={this.fetchData} > */}
      {/* Fetch Data
        </button>     */}
      {/* <Button/>     */}
      <ExerciseContext.Provider value={exercises}>
        <Router>
          <Routes>
            <Route path="/" element={<IntroScreen />} />
            <Route path="/intro" element={<IntroScreen />} />
            <Route path="/day" element={<Day />} />
            <Route path="/exercises" element={<ExercisesList />} />
            <Route path="/counter/:id" element={<Counter />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/platecalc" element={<PlateCalculator />} />
            <Route path="/nav" element={<Nav />} />
          </Routes>
        </Router>
      </ExerciseContext.Provider>
    </div>
  );
}

export default App;