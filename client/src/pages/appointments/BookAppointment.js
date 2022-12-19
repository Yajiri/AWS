import React, { useState, useRef } from "react";
import BookAppointmentForm from '../../components/Appointment/BookAppointmentForm'
//import AppointmentSlots from '../../components/Appointment/AppointmentSlots'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookAppointment = (props) => {
    
  const form = useRef();
  const { name, setName} = useState("");
  const { doctor, setDoctor} = useState("");
  const { time, setTime} = useState("");
  const { message, setMessage} = useState("");
  let { bookingID, setBookingID} = useState(0);
  const [loading, setLoading] = useState(false);
  let response = "Test response"
  const data = {
    date: '2022-12-10',
    clinic:{
      id:1,
      name:"Best Clinic", 
      address: "Spannmålsgatan 20",
      city: "Gothenburg",
      coordinate: {
        longitude: 11.969388,
        latitude: 57.707619
      },
      openinghours: {
        monday: "9:00-17:00",
        tuesday: "8:00-17:00",
        wednesday: "8:00-16:00",
        thursday: "9:00-17:00",
        friday: "9:00-15:00"
      },
     
      dentists:5, 
      timeSlots : [
        { time: "8:00", availableSlots: 0},
        { time: "8:30", availableSlots: 0},
        { time: "9:00", availableSlots: 2},
        { time: "9:30", availableSlots: 2},
        { time: "10:00", availableSlots: 1},
        { time: "10:30", availableSlots: 1},
        { time: "11:00", availableSlots: 5},
        { time: "11:30", availableSlots: 5}, 
        // lunch 12-13
        { time: "13:00", availableSlots: 4},
        { time: "13:30", availableSlots: 3},
        { time: "14:00", availableSlots: 0},
        // fika 14:30-15
        { time: "15:00", availableSlots: 3},
        { time: "15:30", availableSlots: 3},
        { time: "16:00", availableSlots: 0},
        { time: "16:30", availableSlots: 0}
      ]
    }
}

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };


const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const clinicName = data.clinic.name
    setBookingID(bookingID+1)
    const { bookingID, name, doctor, time, message } = this.state;
    // await axios.post(
    //   'https://i1xsjzkri4.execute-api.us-east-1.amazonaws.com/default/serverlessAppFunction',
    //   { bookingID: `${clinicName}, ${bookingID}, ${doctor}, ${time},  ${name}, ${message}` }
    // );
    response = "Your booking was created with success! Your booking ID is " + bookingID;
    
}

  return (
    <section>
        <Container>
            <Row>
                <Col>
                <div className="card card-container">
                    <h2>Available time slots for {data.date}</h2>
                        <BookAppointmentForm data={data}/>
                    </div>
                </Col>

                <Col>
                    <div className="card card-container">
                    <h2 className="card-title">{data.clinic.name}</h2>
                    <div className="card-text">
                        <p>Opening hours</p>
                        <p>Monday: {data.clinic.openinghours.monday}</p>
                        <p>Tuesday: {data.clinic.openinghours.tuesday}</p>
                        <p>Wednesday: {data.clinic.openinghours.wednesday}</p>
                        <p>Thursday: {data.clinic.openinghours.thursday}</p>
                        <p>Friday: {data.clinic.openinghours.friday}</p>
                        <br></br>
                        <p>Address</p>
                        <p>{data.clinic.address} {data.clinic.city}</p>
                    </div>
                    
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default BookAppointment;