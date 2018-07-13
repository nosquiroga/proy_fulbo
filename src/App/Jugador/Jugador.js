import React, { Component } from 'react';
import { Panel, Grid, Row, Col, PageHeader, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Calendario from '../Calendario';
import moment from 'moment';
import 'moment/locale/es-us';

const now = moment();

const Jugador = () => (
         <Grid>
            <Row>
                <Col lg={12}>
                    <PageHeader >Jugadores <small>Alta, Baja y Modificacion</small></PageHeader>
                </Col>
            </Row>
            <Panel id="PanelCollapse" defaultExpanded bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title toggle componentClass="h3">Agregar Jugador</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>               
                    <form>
                        <Row>
                            <Col lg={6}>
                                <FormGroup>
                                    <ControlLabel>Nombre:</ControlLabel>
                                    <FormControl id="txtNombre" type="text" placeholder="Ingrese nombre del jugador" />
                                </FormGroup>
                            </Col>
                            <Col lg={6}>
                                <FormGroup>
                                    <ControlLabel>Apellido:</ControlLabel>
                                    <FormControl id="txtApellido" type="text" placeholder="Ingrese apellido del jugador" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <FormGroup>
                                    <ControlLabel>Fecha de Nacimiento:</ControlLabel>
                                    <Calendario defaultValue={now} />
                                </FormGroup>
                            </Col>
                            <Col lg={6}>
                                <FormGroup>
                                    <ControlLabel>Equipo:</ControlLabel>
                                    <FormControl componentClass="select" placeholder="Seleccione un equipo">
                                        <option>Boca Juniors</option>
                                        <option>River Plate</option>
                                        <option>San Lorenzo de Almagro</option>
                                        <option>Independiente</option>
                                        <option>Racing Club</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <FormGroup>
                                    <ControlLabel>Posicion</ControlLabel>
                                    <FormControl componentClass="select" multiple placeholder="Seleccione un equipo">
                                        <option>Arquero</option>
                                        <option>Defensor</option>
                                        <option>Mediocampista</option>
                                        <option>Delantero</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <Button className="pull-right">Aceptar</Button>
                            </Col>
                        </Row>
                    </form>                     
                </Panel.Body>
            </Panel>
        </Grid>   
    );


export default Jugador;