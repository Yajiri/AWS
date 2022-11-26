import React, { Component } from 'react'

export class AppointmentItem extends Component {
  render() {
    return (
      <div style={ backgroundStyle }>{this.props.appointment.title}, {this.props.appointment.time} <button type="button" class="btn btn-light" style={{margin: '15px'}}> Accept </button><button type="button" class="btn btn-light"> Deny </button></div>
    )
  }
}

const backgroundStyle = {
    padding: '10px',
    borderBottom: '1px #000000 dotted',
}

export default AppointmentItem