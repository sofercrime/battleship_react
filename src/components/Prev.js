import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const Prev = props => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          {props.screenMode === 'desktop'
            ? <a href="/">{props.screenMode === 'desktop' ? 'Desktop View Battleships' : 'Tablet View Battleships'}</a>
            : <a
              onClick={() => props.resetGame()}>{props.screenMode === 'desktop' ? 'Desktop View Battleships' : 'Tablet View Battleships'}</a>
          }
        </Navbar.Brand>
      </Navbar.Header>
      {props.screenMode === 'desktop' &&
      <Nav pullRight>
        <NavItem onClick={() => props.resetGame()}>
          Restart
        </NavItem>
      </Nav>
      }
    </Navbar>
  )
}

export default Prev;