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

const exercisesData = [];

const App = () => {

  const {state,addUser,addExercise,addWorkout,addDateWorkout} = useApplicationData();
  const [exercises, setExercises] = useState(state.exercises);
  const [day2, setDay2] = useState(new Date());
  const [addNewWorkout, setNewWorkout] = useState("");

  const data = {exercises, setExercises, day2, setDay2,state,addUser,addExercise,addWorkout,addDateWorkout};

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


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      
      <ExerciseContext.Provider value={data}>
        <Router>
          <Routes>
            <Route path="/" element={<IntroScreen />} />
            <Route path="/intro" element={<IntroScreen />} />
            <Route path="/empty" element={<Empty />} />
            <Route path="/day/:date" element={<Day />} />
            <Route path="/back" element={<Back />} />
            <Route path="/exercises/:date" element={<ExercisesList />} />
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