import React from 'react'

function Player(props) {
  return (
    <div>
      <div className='playerDiv'>
        <img src={props.link}></img>
        <h3>Team:{props.team}</h3>
        <h3>STR:{props.str}</h3>
        <h4>AVG:{props.avg}</h4>
      </div>
    </div>
  )
}

export default Player
