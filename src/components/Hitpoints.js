import React from 'react'
import hitSmall from './../assets/img/Hit small.png'
import missSmall from './../assets/img/Miss small.png'

const Hitpoints = props => {
  const hitPointsCounter = [];
  const hitCounter = [];
  for (let i = 0; i < props.hitPoints; i++) {
    hitPointsCounter.push(
      (<span key={i}><img src={missSmall} className='hitPointMark' alt=""/></span>)
    )
  }
  for (let j = 0; j < props.hits; j++) {
    hitCounter.push(
      (<span key={j}><img src={hitSmall} className='hitPointMark' alt=""/></span>)
    )
  }
  return (
    <span>
      {hitPointsCounter}{hitCounter}
    </span>
  )
}

export default Hitpoints;