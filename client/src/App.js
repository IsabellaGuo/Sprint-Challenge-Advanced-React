import React from 'react';
import Axios from 'axios';

import PlayerList from './Components/PlayerList';
import SearchForm from './Components/SearchForm';

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
    return(
    <div className = "App">
      <SearchForm
          data={this.state.data}
          name={this.state.name}
          country={this.state.country}
        />
      <PlayerList
       data={this.state.dat}
       name={this.state.name}
       country={this.state.country}
       />
      
    </div>
    );
  }
}


export default App;
