import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader, form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { DateTimeField } from 'react-bootstrap-datetimepicker';


const Jugador = () => (
        <Grid>
            <Row>
                <Col lg={12}>
                    <PageHeader >Jugadores <small>Alta, Baja y Modificacion</small></PageHeader>
                </Col>
            </Row>
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
                            <FormControl id="txtApellido" type="text" placeholder="Ingrese apellido del jugador" />
                        </FormGroup>
                    </Col>
                    <Col lg={6}>
                        <FormGroup>
                            <ControlLabel>Equipo:</ControlLabel>
                            <FormControl id="txtApellido" type="text" placeholder="Ingrese apellido del jugador" />
                        </FormGroup>
                    </Col>
                </Row>
            </form>
        </Grid>        
    );


export default Jugador;