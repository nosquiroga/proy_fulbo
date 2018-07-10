import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = () => (
    <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                FulboDB
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav bsStyle="pills" pullRight>
                <NavDropdown title="Admin" id="drpJugadores">
                    <LinkContainer to="/jugadores">
                        <MenuItem eventKey={1} href="#">Jugadores</MenuItem>
                    </LinkContainer>
                    <MenuItem>Equipos</MenuItem>
                </NavDropdown>
                <NavItem href="#">Transfer</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Menu;