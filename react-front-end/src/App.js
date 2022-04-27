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
import BottomNav from './components/BottomNav';
import Empty from './components/Empty';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Back from './components/Back';

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

  // const theme = createTheme({
  //   typography: {
  //     // fontFamily: ["Train One", "cursive"].join(","),
  //     fontFamily: ["Carme", "sans-serif"].join(","),
  //   },
  // });

  const theme = createTheme({
    typography: {
      // fontFamily: ["Train One", "cursive"].join(","),
      fontFamily: ["Carme", "sans-serif"].join(","), 
    },
    h1: {
      // fontFamily: ["Train One", "cursive"].join(","),
      fontFamily: ["Carme", "sans-serif"].join(","), 
    },
  });

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
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <button onClick={this.fetchData} > */}
      {/* Fetch Data
        </button>     */}
      {/* <Button/>     */}
      <ExerciseContext.Provider value={exercises}>
        <Router>
          <Routes>
            <Route path="/" element={<IntroScreen />} />
            <Route path="/intro" element={<IntroScreen />} />
            <Route path="/empty" element={<Empty />} />
            <Route path="/day" element={<Day />} />
            <Route path="/back" element={<Back />} />
            <Route path="/exercises" element={<ExercisesList />} />
            <Route path="/counter/:id" element={<Counter />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/platecalc" element={<PlateCalculator />} />
            <Route path="/nav" element={<Nav />} />
            <Route path="/bottom" element={<BottomNav />} />
          </Routes>
        </Router>
      </ExerciseContext.Provider>
    </div>
    </ThemeProvider>
  );
}

export default App;