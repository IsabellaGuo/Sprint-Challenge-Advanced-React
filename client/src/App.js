import React from 'react';
import Axios from 'axios';

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [],
      name: "",
      country: "",
    };
  }

  componentDidMount(){
    Axios
    .get("http://localhost:5000/api/players")
    .then(response=>{
      this.setState({
        data: response.data,
        name: response.data.name,
        country: response.data.country
      });
    })
    .catch (error => console.log("Not found"))
  }
  render(){
    <div className = "App">
      
    </div>
  }
}


export default App;
