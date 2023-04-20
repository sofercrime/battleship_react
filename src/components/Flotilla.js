import React from 'react';
import Hitpoints from "./Hitpoints";

const Flotilla = props => {
    return (
      <ul className='flotillaContainer'>
        {
          props.flotilla.map((ship, index) => {
            return (
              <li key={index} className='shipItem'>
                <img src={ship.icon} className="shipIcon" alt="shipIcon"/>
                <Hitpoints hitPoints={ship.hitPoints - ship.hits} hits={ship.hits}/>
              </li>
            )
          })
        }
      </ul>
    )
}

export default Flotilla;
