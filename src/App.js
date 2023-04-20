import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash'
import React, { useState, useEffect } from 'react';
import { Grid, Row } from 'react-bootstrap';
import './assets/css/App.css';
import BattleField from './components/BattleField.js';
import Prev from "./components/Prev";
import Stats from "./components/Stats";
import { shipTypes } from './constants/constants';
import { getBattleField, makeClone } from './helpers/generateBattleField';

const App = () => {
  const [battleField, setBattleField] = useState(null);
  const [flotilla, setFlotilla] = useState(_.cloneDeep(shipTypes));
  const [shots, setShots] = useState(0);
  const [hits, setHits] = useState(0);
  const [screenMode, setScreenMode] = useState(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 992) {
        setScreenMode('tablet');
      } else {
        setScreenMode('desktop');
      }
    }
    window.addEventListener("resize", updateDimensions());
    return() => {
      window.removeEventListener("resize", updateDimensions());
    }    
  });

  const onClick = () => {
    let newFlotilla = _.cloneDeep(shipTypes);
    setBattleField(getBattleField());
    setHits(0);
    setShots(0);
    setFlotilla(newFlotilla);
  }

  const resetGame = () => {
    let newFlotilla = _.cloneDeep(shipTypes);
    setBattleField(getBattleField());
    setHits(0);
    setShots(0);
    setFlotilla(newFlotilla);
  }

  const onCellClick= (x, y) => {
    let newBattleField = makeClone(battleField);
    let shot = shots + 1;
    let newFlotilla = [...flotilla];
    let cellValue = battleField[x][y];
    if (cellValue >= 100) {
      switch (cellValue) {
        case 100:
          newFlotilla[0].hits = newFlotilla[0].hits + 1;
          break;
        case 200:
          newFlotilla[1].hits = newFlotilla[1].hits + 1;
          break;
        case 300:
          newFlotilla[2].hits = newFlotilla[2].hits + 1;
          break;
        case 400:
          newFlotilla[3].hits = newFlotilla[3].hits + 1;
          break;
        case 500:
          newFlotilla[4].hits = newFlotilla[4].hits + 1;
          break;    
        default:
          break;
      }
      newBattleField[x][y] = 'hitted';
      let newhits = hits + 1;
      setBattleField(newBattleField);
      setHits(newhits);
      setShots(shot);
      setFlotilla(newFlotilla);
    } else {
      newBattleField[x][y] = 'miss';
      setBattleField(newBattleField);
      setShots(shot);
    }
  }

  const statsPanel = (
      <Stats
        flotilla={flotilla}
        hits={hits}
        shots={shots}
      />
    );
    const battleFieldPanel = (
      <BattleField
        hits={hits}
        battleField={battleField}
        onClick={() => onClick()}
        onCellClick={(x, y) => onCellClick(x, y)}
        screenMode={screenMode}
      />
    );

    return (
      <div className='main-content'>
        <Prev
          resetGame={() => resetGame()}
          screenMode={screenMode}
        />
        <Grid>
          {
            screenMode === 'desktop'
              ? <Row className='show-grid'>{statsPanel}{battleFieldPanel}</Row>
              : <Row className='show-grid'>{battleFieldPanel}{statsPanel}</Row>
          }
        </Grid>
      </div>
    );
}

export default App;
