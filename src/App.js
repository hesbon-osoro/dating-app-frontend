import React, { useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import DatingCards from './components/DatingCards'
import SwipeButtons from './components/SwipeButtons'
import ReactGA from "react-ga";

ReactGA.initialize('G-7LFYFDYDX4');

function App() {
  useEffect(() => {
      ReactGA.pageview('/');
  })
  return (
    <div className="app">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
