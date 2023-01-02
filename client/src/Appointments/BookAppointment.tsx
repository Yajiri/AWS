import React, { useEffect, useState } from "react";
import BookAppointmentForm from "./BookAppointmentForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../Navbar/Navbar";
import styled from 'styled-components';
import { breakpoints } from '../MediaQueries';
import {clinicApi} from '../services/clinicApi';
import { appointmentApi } from "../services/appointmentApi";
import IClinic  from '../types/IClinic'
import ITimeSlots from "../types/ITimeSlots";

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

  const [timeSlots,setTimeSlots] = useState<ITimeSlots>({
    clinicId: "",
    date: "",
    timeSlots : []
  })
  const [clinicData,setClinicData] = useState<IClinic>({
    clinicId: {N: ""},
    name: {S: ""},
    address: {S: ""},
    city: {S: ""},
    coordinate: {M: {
      latitude: {N: ""},
      longitude: {N: ""}
    }},
    openinghours: {M: {
      monday: {S: ""},
      tuesday: {S: ""},
      wednesday: {S: ""},
      thursday: {S: ""},
      friday: {S: ""}
    }},
    dentists: {N: ""},
    owner: {S: ""}
    })

 
  async function getData() {
    const data = await clinicApi.getClinic("2")
    console.log(data.data)
    //setClinicData(data.data)
    return data
    
  }


  useEffect(() => {
    getData().then( resp =>{
      setClinicData(resp.data)
      console.log(clinicData)
    }
    ) 

  },[])
  const date = {
    D:10,
    m:12,
    y:2022,
    d:"Wed"

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
                        <BookAppointmentForm data={timeSlots}/>
                    </div>
                </Col>

                <Col>
                    <div className="card card-container">
                    <h2 className="card-title">{clinicData.name.S}</h2>
                    <div className="card-text">

                        <h5>Opening hours</h5>
                        <p> Monday: {clinicData.openinghours.M.monday.S}</p>                        
                        <p> Tuesday: {clinicData.openinghours.M.tuesday.S}</p>
                        <p> Wednesday: {clinicData.openinghours.M.wednesday.S} </p>
                        <p> Thursday: {clinicData.openinghours.M.thursday.S}</p>
                        <p> Friday: {clinicData.openinghours.M.friday.S}</p>
                        <h5>Address</h5>
                        <p> {clinicData.address.S} </p>
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