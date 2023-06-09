import React from 'react'

const Scores = props => {
  return (
    <div className='scorePanel text-center'>
      <div className='scoreHits'>
        <h2 className='scores'>{props.hits}</h2>
        <hr/>
        <p className='scoreText'>Hits</p>
      </div>
      <div className='scoreShots'>
        <h2 className='scores'>{props.shots}</h2>
        <hr/>
        <p className='scoreText'>Shots</p>
      </div>
    </div>
  )
}

export default Scores;