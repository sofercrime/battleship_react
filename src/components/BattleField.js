import React from 'react';
import { Col } from 'react-bootstrap';
import Cell from "./Cell";
import StartButton from "./StartButton";

const BattleField = props => {
  return (
    <Col lg={5} md={6} sm={12} xs={12} className='battleFieldPanel'>
      {!props.battleField &&
      <table className={`emptyBattleField ${props.screenMode === 'tablet' && 'centered'}`}>
        <tbody>
        <tr>
          <td className='emptyBattleField'>
            <StartButton onClick={() => props.onClick()}/>
          </td>
        </tr>
        </tbody>
      </table>
      }
      {props.battleField && props.hits < 17 &&
      <table className={`battlefieldTable ${props.screenMode === 'tablet' && 'centered'}`}>
        <tbody>
        {props.battleField.map((row, x) => {
          return (
            <tr key={x}>
              {row.map((column, y) => {
              return (
                <td
                  key={y}
                  className='tableCell'
                >
                  <Cell
                    onCellClick={() => props.onCellClick(x, y)}
                    x={x}
                    y={y}
                    cellState={column}
                  />
                </td>
              )
            })}</tr>
          )
        })}
        </tbody>
      </table>
      }
      {props.hits === 17 &&
      <table className={`emptyBattleField ${props.screenMode === 'tablet' && 'centered'}`}>
        <tbody>
        <tr>
          <td>
            <div className='text-center'>
              <h1>Game over</h1>
              <StartButton onClick={() => props.onClick()}/>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      }
    </Col>
  );
}

export default BattleField;