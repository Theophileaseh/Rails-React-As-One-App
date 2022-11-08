import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greetings from './Components/Greetings';  // eslint-disable-line
import Home from './components/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="messages" exact element={<Greetings />} />
    </Routes>
  </Router>
);

export default App;
