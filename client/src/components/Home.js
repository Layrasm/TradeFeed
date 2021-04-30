import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import '../App.css';
import Widgets from './Widgets';

const Home = () => {


  return (
    <div className="app">
      <Sidebar />

      <Feed />

      <Widgets />

    </div>
  )
};

// const Home = () => <div>Home</div>; one lines

export default Home;