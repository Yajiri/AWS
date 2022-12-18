import React from "react";
import Table from 'react-bootstrap/Table'


const AppointmentSlots = (props) => {
  return(
    <>
    <div className="card card-container">
    <Table>
      <thead>
        <tr>
        <th>{props.data.doctors}</th>
        <th>{props.data.doctors}2</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
            <td>8:00</td>
            <td>8:00</td>
        </tr>
        <tr>
            <td>8:30</td>
            <td>x</td>
        </tr>
        <tr>
            <td>9:00</td>
            <td>x</td>
        </tr>
        <tr>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <td>10:00</td>
            <td>10:00</td>
        </tr>
        <tr>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <td>12:00</td>
            <td>12:00</td>
        </tr>
        <tr>
            <td>13:00</td>
            <td>13:00</td>
        </tr>
        <tr>
            <td>13:30</td>
            <td>13:30</td>
        </tr>
        <tr>
            <td>x</td>
            <td>14:30</td>
        </tr>
        <tr>
            <td>15:30</td>
            <td>15:30</td>
        </tr>

    </tbody>


    </Table>
    </div>
    </>
    )

};


export default AppointmentSlots;