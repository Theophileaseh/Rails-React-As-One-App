import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="homepage">
    <h2>Welcome to this awesome app</h2>
    <Link to="messages">Wiew messages</Link>
  </div>
);

export default Home;
