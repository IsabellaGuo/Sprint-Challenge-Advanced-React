import React from 'react';
import axios from 'axios';

import{PlayerCard} from './Components/PlayerCard';
import NavigationBar  from './Components/NavigationBar';


import './App.css';

class App extends React.Component{
  constructor(){
    super ();
    this.state ={
      players: [],
    }
  }
    componentDidMount () {
      axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        console.log("data",response)
        this.setState ({
          players: response.data
        })
  
        })
        .catch (error =>{
          console.log("error", error)
      })
    }
    render () {
  return (
    <div>
     <NavigationBar />
       {this.state.players.map (player => (
        <PlayerCard key={player.id} name={player.name}
        country= {player.country}
        />
    ))}

    </div>
  );
  }
}

export default App;
