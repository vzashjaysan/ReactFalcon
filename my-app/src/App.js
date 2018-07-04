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
      {
        JobCode:"6001",
        JobType:"Front End Developer",
        Summary:"Devlopment of Front End design with new Technology stack",
        PrimarySkills:"ReactJS, Angular JS",
        SecondarySkills:"Ajax,Bootstrap",
        YearsOfExperience:"2-4 Years",
        NumberofOpenings:"7",
        JobLocation:"Chennai,Hyderabad"
        },
        {
        JobCode:"6002",
        JobType:"Java Developer",
        Summary:"Responsibilities Power Programmer is an important initiative within Global Delivery to develop a team of Full Stack Developers who will be working",
        PrimarySkills:"JAVA, J2EE",
        SecondarySkills:"Play,Rest, Web Services, Hibernate",
        YearsOfExperience:"3-5 Years",
        NumberofOpenings:"5",
        JobLocation:"Chennai"
        },
        {
        JobCode:"6003",
        JobType:"DotNet Developer",
        Summary:"Responsibilities Power Programmer is an important initiative within Global Delivery to develop a team of Full Stack Developers who will be working",
        PrimarySkills:"Dot net 4.5,MVC,Angular",
        SecondarySkills:"Rest, Web Services, Node JS",
        YearsOfExperience:"4-6 Years",
        NumberofOpenings:"3",
        JobLocation:"Hyderabad"
        },
        {
        JobCode:"6004",
        JobType:"FullStack Developer",
        Summary:"Responsibilities Power Programmer is an important initiative within Global Delivery to develop a team of Full Stack Developers who will be working",
        PrimarySkills:"Java,SpringBoot,Angular,NodeJS",
        SecondarySkills:"Web Services, Mongo DB",
        YearsOfExperience:"5-8 Years",
        NumberofOpenings:"5",
        JobLocation:"Hyderabad, Chennai"
        }
    ]
    };
  }
  
  render() {
    return (
      <div>
     

     
           
             {this.state.opportunities.map(d => <table border="1" cellSpacing="3" width="500" cellPadding="2" >
       <tr>
         <td>Job Code
           </td>
           <td>{d.JobCode}
           </td>
         </tr>
         <tr>
         <td>Job Type
           </td>
           <td>{d.JobType}
           </td>
         </tr>
         <tr>
         <td>Summary
           </td>
           <td>{d.Summary}
           </td>
         </tr>
         <tr>
         <td>Primary Skills
           </td>
           <td>{d.PrimarySkills}
           </td>
         </tr>

         <tr>
         <td>Secondary Skills
           </td>
           <td>{d.SecondarySkills}
           </td>
         </tr>
         <tr>
         <td>Years Of Experience
           </td>
           <td>{d.YearsOfExperience}
           </td>
         </tr>
         <tr>
         <td>Number of Openings
           </td>
           <td>{d.NumberofOpenings}
           </td>
         </tr>
         <tr>
         <td>JobLocation
           </td>
           <td>{d.JobLocation}
           </td>
         </tr>
         <tr>
         <td colSpan="1">
         </td>
        
           <td><input type="button" class="go-btn" value="Apply Now"/>
           </td>
         </tr>
       </table>)}
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
