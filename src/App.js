import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const hats = () => {
  return (
    <h1>Hats</h1>
  )
}
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component = {HomePage}/>
        <Route path="/hats" component = {hats}/>
      </Switch>
    </div>
  );
}

export default App;
