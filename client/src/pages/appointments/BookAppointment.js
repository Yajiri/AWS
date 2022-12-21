import React from "react";
import BookAppointmentForm from '../../components/Appointment/BookAppointmentForm'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookAppointment = (props) => {
 
  const clinicData = {
    id: 1,
    name: "Your Dentist",
    owner: "Dan Tist",
    dentists: 3,
    address: "Spannmålsgatan 20",
    city: "Gothenburg",
    coordinate: {
      "longitude": 11.969388,
      "latitude": 57.707619
    },
    openinghours: {
      "monday": "9:00-17:00",
      "tuesday": "8:00-17:00",
      "wednesday": "7:00-16:00",
      "thursday": "9:00-17:00",
      "friday": "9:00-15:00"
    }
  }

  const date = {
    d:10,
    m:12,
    y:2022
  }
  const schedule = {
    clinicIDDate:"1_12-11-2022",
    timeSlots: [
      {"7:00": ["e1@email.com", "e2@email.com"]},
      {"7:30": ["e12@email.com", "e221@email.com", "e22@email.com"]},
      {"8:00": ["e13@email.com"]},
      {"8:30": ["e14@email.com"]},
      {"8:00": []}
    ]
  }

  const bookingFormInfo={
    dentists: 3,
    clinicIDDate:"1_12-11-2022",
    timeSlots: [
      {"7:00": ["e1@email.com", "e2@email.com"]},
      {"7:30": ["e12@email.com", "e221@email.com", "e22@email.com"]},
      {"8:00": ["e13@email.com"]},
      {"8:30": ["e14@email.com"]},
      {"8:00": []}
    ]
  }

  return (
    <section>
        <Container>
            <Row>
                <Col>
                <div className="card card-container">
                    <h2>Available time slots for {date.d} {date.m} {date.y} </h2>
                        <BookAppointmentForm data={bookingFormInfo}/>
                    </div>
                </Col>

                <Col>
                    <div className="card card-container">
                    <h2 className="card-title">{clinicData.name}</h2>
                    <div className="card-text">
                        <p>Opening hours</p>
                        <p>Monday: {clinicData.openinghours.monday}</p>
                        <p>Tuesday: {clinicData.openinghours.tuesday}</p>
                        <p>Wednesday: {clinicData.openinghours.wednesday}</p>
                        <p>Thursday: {clinicData.openinghours.thursday}</p>
                        <p>Friday: {clinicData.openinghours.friday}</p>
                        <br></br>
                        <p>Address</p>
                        <p>{clinicData.address} {clinicData.city}</p>
                    </div>
                    
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default BookAppointment;