import React, { Component } from 'react'

export class AppointmentItem extends Component {
  render() {
    return (
      <div style={ backgroundStyle }>{ this.props.appointment.title} <button type="button" class="btn btn-light"> Accept </button> <button type="button" class="btn btn-light"> Deny </button></div>
    )
  }
}

const backgroundStyle = {
    padding: '10px',
    borderBottom: '1px #000000 dotted',
}

export default AppointmentItem