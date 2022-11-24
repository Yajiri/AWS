import React, { Component } from "react";
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

class Cancellations extends Component {
    
render () {
 return this.props.c.map((c)  => (
<h3>{c.title}</h3>
 ));
 }
}
export default Cancellations
