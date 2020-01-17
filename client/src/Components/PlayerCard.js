import React from 'react';

export const PlayerCard = ({name, country}) => {
    return(
        <div className='cards'>
            <h4>Name: {name}</h4>
            <h4>Country: {country}</h4>
        </div>
    )
}