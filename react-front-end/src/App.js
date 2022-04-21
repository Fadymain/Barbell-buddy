import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Login from './components/Login';
import Register from './views/Register';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Button from './components/Button';
import Day from './components/Day';
import DayEmpty from './components/DayEmpty';
import ExercisesList from './components/ExercisesList';
import Counter from './components/Counter';
import PlateCalculator from './components/PlateCalculator';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>    
        {/* <Button/>     */}
        <Router>
        <Routes>
          <Route path="/day" element={<Day />} />
          <Route path="/dayempty" element={<DayEmpty />} />
          <Route path="/exercises" element={<ExercisesList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/platecalc" element={<PlateCalculator />} />
        </Routes>
      </Router>
      </div>
    );
  }
}

export default App;
