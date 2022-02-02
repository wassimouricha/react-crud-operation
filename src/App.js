import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './components/Home'
import {AddUser} from './components/AddUser'
import {EditUser} from './components/EditUser'



function App() {
  return (
    <div className="App">
      <Router>
        <h1> Nav </h1>
        <Switch>
            <Home />
            <AddUser />
            <EditUser />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;