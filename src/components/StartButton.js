import React from 'react'

const StartButton = props => {
  return (
    <div className='text-center '>
      <div onClick={() => props.onClick()}>{props.text ? props.text : <h1>Start new game</h1>}</div>
    </div>
  )
}

export default StartButton;