import React, { Component } from "react";
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

class Appointments extends Component {
    
render () {
 return this.props.appointments.map((appointments)  => (
<h3>{appointments.title}</h3>
 ));
 }
}
export default Appointments
