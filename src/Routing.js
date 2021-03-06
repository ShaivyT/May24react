import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import App from './App'
import Contact from './Components/Contact/Contact';
import Homeworks from './Components/Homeworks';
import Project from './Components/Projects/Project';

function Routing () {
  return (
    <div className="App">
       <Router>
          <Switch>
           <Route path="/contact" component={Contact} />
           <Route path="/homeworks" component={Homeworks} />
           <Route path="/projects" component={Project} />
           <Route path="/" component={App}/>
            
        </Switch>
        </Router>
    </div>
  );
}

export default Routing;
