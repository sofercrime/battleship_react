import React from 'react';
import hit from './../assets/img/Hit.png';
import miss from './../assets/img/Miss small.png';

const Cell = props => {
    const onClick = (x, y, cellState)=>{
        if (cellState !== 'miss' && cellState !== 'hitted') {
          props.onCellClick(x, y);
        }
    }

    return(
        <div onClick={() => onClick(props.x, props.y, props.cellState)} className='cellStyle'>
        {props.cellState === 'miss' && <img src={miss} className='miss' alt='miss' width='auto' height='auto'/>}
        {props.cellState === 'hitted' && <img src={hit} className='hitted' alt='hitted' width='auto' height='auto'/>}
      </div>
    )
}

export default Cell;