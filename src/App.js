import React from 'react';
import './App.css';
import ClockTile from './components/ClockTile/ClockTile';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <ClockTile />
        <ClockTile />
      </div>
    );
  }
}

export default App;