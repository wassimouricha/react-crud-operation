import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import { GLobalProdvider } from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div style={ {maxWidth: "30rem", margin: "4rem auto"}}>
      <GLobalProdvider>
      <Router>
        <Switch>
        < Route  exact path="/" component={Home}  />
            < Route path="/add" component={AddUser}  />
            < Route path="/edit/:id" component={EditUser}  />
            
        </Switch>
      </Router>
      </GLobalProdvider>
  
     
    </div>
  );
}

export default App;
