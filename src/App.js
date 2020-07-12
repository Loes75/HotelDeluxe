import React from 'react';
//import './App.css';
import './css/App.css'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomInfo from './pages/RoomInfo';
import Error from './pages/Error';


import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/habitaciones" component={Rooms}/>
          <Route exact path="/habitaciones/:slug" component={RoomInfo}/>
          <Route component={Error}/>           
        </Switch>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
