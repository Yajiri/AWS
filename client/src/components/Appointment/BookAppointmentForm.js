import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik } from 'formik'


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
        this.setState({response:'Thank you for your request! Please check your email to find your booking confirmation!'})
        console.log (this.seletedTime + " " + this.email + " " + this.clinicIDDate +" ")
        // await axios.post(
        //   '',
        //   { timeSlot: `${timeSlot}`, email: `${email}`, clinicIDDate: `${bookingID}`, clinic: `${clinic}`, date: `${date}` }
        // );
    }

    validateEmail(email){
        const errors = {};
        const regEx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (regEx.test(email)){
          console.log('Invalid email address')
        }
      
        return errors
     }

     checkAvailabitily(timeSlots){
        let isAvailable=false;
        for(const element of timeSlots){
            if(element.available===true){
                isAvailable=true;
            }

        }
        return isAvailable;
     }

      render(){
        return(
            
            <div className="card card-container">
                <form>
                    <div className="form-group">
                        <Container>
                            <Col>
                                <Row>
                                    { this.checkAvailabitily(this.state.timeSlots) ? (
                                        <>{this.state.timeSlots.map(slot => {
                                            if(slot.available)
                                                return <Col>
                                                            <Row>
                                                                <Button style={{margin:"1px"}}className="timeSlot" id={slot.time} variant="success" disabled>{slot.time}</Button>
                                                            </Row>
                                                        </Col>
                                                return <Col>
                                                            <Row>
                                                                <Button style={{margin:"1px"}}className="timeSlot" id={slot.time} variant="secondary" disabled>{slot.time}</Button>
                                                            </Row>
                                                        </Col>
                                        }
    
                                        )}
                                    </>

                                    ) : (
                                        <><div className="alert alert-secondary" role="alert">Unfortunately, there are no availabitilies for this date. Please select another day.</div>
                                        </>
                                    )
                                        

                                    }
                                        
                                    
                                </Row>
                            </Col>
                        </Container>
                    </div>
                
                    {this.checkAvailabitily(this.state.timeSlots) && (
                        <>
                            <div className="form-group">
                            <label htmlFor="seelctedTime">Select a slot*</label>
                            <Form.Select name="selectedTime" onChange={this.handleChange}>
                                {this.state.timeSlots.map(slot => {
                                    if(slot.available)
                                        return <option key={slot.time} name={slot.time} value={slot.time}>{slot.time}</option>
                                    }
                                )}
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
                        <button className="btn btn-primary btn-block" onClick={this.handleSubmit} disabled={this.state.loading}> 
                        
                            {this.state.loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Make Appointment</span>
                        </button>
                        </div>
                    </>

                    )}
                    

                    <button className="btn btn-outline-info" onClick={this.handleSubmit}>                 
                        <span>Return to date&clinic selection</span>
                    </button>

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
