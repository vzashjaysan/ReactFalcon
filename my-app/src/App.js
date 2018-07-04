import React from "react";
import RouteTest from "./RouteTest"
import { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component
{
  constructor (props){
    super(props);
    this.state = 
    {opportunities:
    [
  {jobID:"6001",jobname:"Web Developer"},
  {jobID:"6002",jobname:"Java Developer"}
    ]
    };
  }
 
  render() {
    return (
      <div>
     
     
             <ul>
             {this.state.opportunities.map(d => <li key={d.jobID}> <a href="#">{d.jobname}</a></li>)}
               </ul>
             
      
           </div>
    );
  }
  
}
const ParamsExample = () => (
  <Router>
    <div>
      <h2>Job Opportunites</h2>
      <ul>
        <li>
          <Link to="/RouteTest1/5">Netflix</Link>
        </li>
        
      </ul>

      <Route path="/:id" component={RouteTest} />

      {/*
         It's possible to use regular expressions to control what param values should be matched.
            * "/order/asc"  - matched
            * "/order/desc" - matched
            * "/order/foo"  - not matched
      */}
      <Route
        path="/order/:direction(asc|desc)"
        component={ComponentWithRegex}
      />
    </div>
  </Router>
);

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);

export default App;
