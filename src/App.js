import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from "./MainPage.js"
import Welcome from './Welcome';
import Portfolio from './Portfolio';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
