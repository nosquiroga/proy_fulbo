import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import Menu from './Menu';
import Jugador from './Jugador';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

const App = () => (

  <Router>
    <Grid fluid="true">
        <Row>
          <Col lg={12}>
            <Menu />
            <Switch>
              <Route exact path="/" render={() => <div>
                                                    <Jumbotron>
                                                      <h1>Bienvenido a FulboDB!</h1>
                                                      <p>La primera plataforma digital de informacion sobre futbol ya esta aqui.</p>
                                                      <p>Edita jugadores, equipos, hace transferencias y mucho mas...</p>
                                                    </Jumbotron>
                                                  </div>} />
              <Route path="/jugadores" component={Jugador} />
            </Switch>           
          </Col> 
        </Row>
      </Grid>
  </Router>
 
)

export default App;
