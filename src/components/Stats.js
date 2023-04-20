import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Flotilla from './../components/Flotilla';
import Scores from "./../components/Scores";

const Stats = props => {
  return (
    <Col lg={3} lgOffset={2} md={3} mdOffset={2} sm={12} xs={12}>
      <Row style={{margin: 0}}>
        <div className='scoresPanel'>
          <Col md={12} sm={4} xs={12}>
            <Scores hits={props.hits} shots={props.shots}/>
          </Col>
          <Col md={12} sm={8} xs={12}>
            <Flotilla flotilla={props.flotilla}/>
          </Col>
        </div>
      </Row>
    </Col>
  )
}

export default Stats;