import React from 'react';
import {  BrowserRouter as Router, } from 'react-router-dom';
import Pages from './pages'
import './App.css';
import store from './resources/store'
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Pages></Pages>
      </Router>
    </Provider>

  );
}

export default App;
