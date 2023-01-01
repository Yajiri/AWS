import React from "react";
import BookAppointmentForm from "./BookAppointmentForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../Navbar/Navbar";
import styled from 'styled-components';
import { breakpoints } from '../MediaQueries';

const MainContainer = styled.div`
height: 100vh;
position: relative;

h2,h3,h4,h5,h6{
  font-family: "DMSans-Regular";, sans-serif ;
  font-weight:400;
}
`
const Box = styled.div`
text-align: center;
padding-top: 6rem;

@media (min-width: ${breakpoints.mobileMin}) {
  margin-bottom: -2rem;
  padding-top: 5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  text-align: left;
}
@media (min-width: ${breakpoints.tabletMin}) {
  margin-bottom: -5rem;
}
`
const BookAppointment = () => {
 
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
    D:10,
    m:12,
    y:2022,
    d:"Wed"

  }
  const schedule = {
    clinicIDDate:"1_12-11-2022",
    timeSlots: [
      {time:"7:00",available:false},
      {time:"7:00", available:false},
      {time:"7:30", available:false},
      {time:"8:00", available:false},
      {time:"8:30", available:false},
      {time:"9:00", available:false},
      {time:"9:30", available:false},
      {time:"10:00", available:false},
      {time:"10:30", available:false},
      {time:"11:00", available:false},
      {time:"11:30", available:false},
      //lunch
      // {time:"12:00", available:false},
      // {time:"12:30", available:false},
      {time:"14:00", available:false},
      {time:"14:30", available:false},
      //fika
      // {time:"15:00", available:false},
      {time:"15:30", available:false},
    ]
  }

  const bookingFormInfo={
    dentists: 3,
    clinicId: 1,
    date: "20230106",
    clinicIDDate:"1_12-11-2022",
    timeSlots: [
      {time:"7:00",available:false},
      {time:"7:00", available:false},
      {time:"7:30", available:false},
      {time:"8:00", available:false},
      {time:"8:30", available:false},
      {time:"9:00", available:false},
      {time:"9:30", available:false},
      {time:"10:00", available:false},
      {time:"10:30", available:false},
      {time:"11:00", available:false},
      {time:"11:30", available:true},
      //lunch
      // {time:"12:00", available:false},
      // {time:"12:30", available:false},
      {time:"14:00", available:false},
      {time:"14:30", available:true},
      //fika
      // {time:"15:00", available:false},
      {time:"15:30", available:false},
    ]
 
  }

  return (
    <MainContainer>
      <Navbar />
      <Box>
        <Container>
            <Row>
                <Col>
                <div className="card card-container">
                    <h3>Available time slots for {date.d} {date.D}.{date.m}.{date.y} </h3>
                        <BookAppointmentForm data={bookingFormInfo}/>
                    </div>
                </Col>

                <Col>
                    <div className="card card-container">
                    <h2 className="card-title">{clinicData.name}</h2>
                    <div className="card-text">
                        <h5>Opening hours</h5>
                        <p> Monday: {clinicData.openinghours.monday}</p>
                        <p> Tuesday: {clinicData.openinghours.tuesday}</p>
                        <p> Wednesday: {clinicData.openinghours.wednesday}</p>
                        <p> Thursday: {clinicData.openinghours.thursday}</p>
                        <p> Friday: {clinicData.openinghours.friday}</p>
                        <h5>Address</h5>
                        <p>{clinicData.address} {clinicData.city}</p>
                    </div>
                    
                    </div>
                    
                </Col>
            </Row>
        </Container>
        </Box>
    </MainContainer>
  );
};

export default BookAppointment;