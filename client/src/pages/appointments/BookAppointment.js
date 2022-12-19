import React, { useState, useRef } from "react";
import AppointmentSlots from '../../components/Appointment/AppointmentSlots'
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
  const data = {clinic:{name:"Best Clinic", openingHours:"mon-fri: 8-16",address:"Great Street 40040 Gothenburg"}, doctors:"Mark J", appointments:[{id:1,date:"20221210",time:"8-8:30"},{id:2,date:"20221210",time:"10-10:30"}]}

  const onChangeSelectDoc = (e) => {
    const doc = e.target.value;
    console.log(doc)
    setDoctor(doc);
  }

  const onChangeSelectedTime = (e) => {
    const time = e.target.value;
    console.log(time)
    setTime(time);
  }

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeMessage = (e) => {
    const message = e.target.value;
    setMessage(message);
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
                    <h2>Available time slots</h2>
                        <AppointmentSlots data={data}/>
                    </div>
                </Col>

                <Col>
                    <div className="card card-container">
                    <h2 className="card-title">{data.clinic.name}</h2>
                    <div className="card-text">
                        <p>Opening hours</p>
                        <p>{data.clinic.openingHours}</p>
                        <br></br>
                        <p>Address</p>
                        <p>{data.clinic.address}</p>

                    </div>
                    
                    </div>
                    <form onSubmit={handleSubmit} ref={form}>
                    <div className="form-group">
                            <label htmlFor="message">Select a doctor</label>
                            <select 
                              value={doctor}
                              onChange={onChangeSelectDoc}>
                                <option>{data.doctors}</option>
                                <option>{data.doctors}2</option>
                            </select>
                            <p>{doctor}</p>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Select a time</label>
                            <select 
                                value={time}
                                onChange={onChangeSelectedTime}>
                                <option>8:00</option>
                                <option>8:30</option>
                                <option>9:00</option>
                                <option>9:30</option>
                                <option>10:00</option>
                                <option>10:30</option>
                                <option>11:00</option>
                                <option>11:30</option>
                                {/* lunch */}
                                <option>13:00</option>
                                <option>13:30</option>
                                {/* fika */}
                                <option>14:30</option>
                                <option>15:00</option>
                                <option>15:30</option>
                            </select>
                        </div>

                        <div className="form-group">
                        <label htmlFor="message">Name*</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={onChangeName}
                            required
                        />
                        </div>


                        <div className="form-group">
                        <button className="btn btn-primary btn-block" disabled={loading}>
                            {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Make Appointment</span>
                        </button>
                        </div>

                        {response && (
                        <div className="form-group">
                            <div className="alert alert-success" role="alert">
                            {response}
                            </div>
                        </div>
                        )}
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default BookAppointment;