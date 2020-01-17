import React from 'react';

class Player extends React.Component{
    render(props){
        return(
            <div className = "player">
                <h3>{this.props.name}</h3>
                <h3>{this.props.country}</h3>
            </div>
        );
    }
}

export default Player;