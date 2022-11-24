import React, { Component } from "react";
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

class Inbox extends Component {
    
render () {
 return this.props.inbox.map((inbox)  => (
<h3>{inbox.title}</h3>
 ));
 }
}
export default Inbox
