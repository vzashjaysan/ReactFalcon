import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  state = {
    response: []
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.obj }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://10.74.18.88:4000/getjobinfo');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
       {

          this.state.response.map
        (data=> <ul key={data._id}><li> {data.title} </li> <li> {data.description} </li> </ul>)
       }
        </p>
      </div>
    );
  }
}

export default App;
