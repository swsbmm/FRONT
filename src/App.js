import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import LateralMenu from './components/LateralMenu/';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (

    <LateralMenu/>
    // <Router>
    //   <Route path="/" exact component={Join} />
    //   <Route path="/chat" component={Chat} />
    // </Router>
  );
}

export default App;
