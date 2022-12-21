import React from "react";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class BookAppointmentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timeSlots : props.data.timeSlots,
            seletedTime: '',
            email: '',
            clinicIDDate: props.data.clinicIDDate,
            dentists: props.data.dentists,
            loading: false,
            response : ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const field = event.target.name;

        this.setState({
            [field]: value
        });
        console.log(field + " " + value)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({loading:true});
        const { timeSlot, name, bookingID, clinic, date } = this.state;
        this.setState({response:'Thank you for your request! Please check your email to find your booking confirmation!'})
        console.log (timeSlot, name, bookingID, clinic, date)
        // await axios.post(
        //   '',
        //   { timeSlot: `${timeSlot}`, name: `${name}`, bookingID: `${bookingID}`, clinic: `${clinic}`, date: `${date}` }
        // );
    }

      render(){
        return(
            
            <div className="card card-container">
                <form>
                    <div className="form-group">
                        <Container>
                            <Col>
                                <Row>
                                    {this.state.timeSlots.map((slot) => (
                                        <Col>
                                            <Row>
                                                <Button id={slot.time} variant="outline-success" disabled>{slot.time}</Button>
                                            </Row>
                                        </Col>
                                        // <div className="radio">
                                        //     <label>
                                        //         <input
                                        //             key={slot.time}
                                        //             type="radio"
                                        //             value={slot.time}
                                        //             name="selectedTime"
                                        //             checked={this.state.seletedTime===slot.time}
                                        //             disabled={slot.availableSlots<1}
                                        //             onChange={this.handleChange}
                                        //             />
                                        //             {slot.time}
                                        //     </label>
                                        // </div>
                                    ))}
                                </Row>
                            </Col>
                        </Container>
                    </div>
                
                    <div className="form-group">
                        <label htmlFor="seelctedTime">Select a slot*</label>
                        <Form.Select name="selectedTime" onChange={this.handleChange}>
                            {this.state.timeSlots.map((slot) => (
                                <option key={slot.time} name={slot.time} value={slot.time}>{slot.time}</option>
                            ))}
                        </Form.Select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email*</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                    </div>


                    <div className="form-group">
                    <button className="btn btn-primary btn-block" onClick={this.handleChange} > 
                    {/* disabled={this.state.loading} */}
                        {this.state.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Make Appointment</span>
                    </button>
                    </div>

                    {this.state.response && (
                    <div className="form-group">
                        <div className="alert alert-success" role="alert">
                        {this.state.response}
                        </div>
                    </div>
                    )}
                </form>
            </div>
        )
      }

}

export default BookAppointmentForm;
