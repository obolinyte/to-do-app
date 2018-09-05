import React, { Component } from 'react';
import './App.css';
import Background from './Background.js';
import Header from './Header.js';
import ToDoMain from './ToDoMain.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
       <Background />
        <div className="app-wrapper">
          <Header />
          <ToDoMain />
        </div>
      </div>

    );
  }
}

export default App;
