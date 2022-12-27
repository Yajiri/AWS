import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as EmailValidator from 'email-validator';
import "bootstrap/dist/css/bootstrap.min.css"

// const validator = require('validator');

class BookAppointmentForm extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            timeSlots : props.data.timeSlots,
            seletedTime: '',
            email: '',
            clinicIDDate: props.data.clinicIDDate,
            dentists: props.data.dentists,
            loading: false,
            inputIsValid: false,
            response : '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.checkInputNotNull = this.checkInputNotNull.bind(this);
    }

    handleChange(event:any) {
        const value = event.target.value;
        const field = event.target.name;
        const check = this.checkInputNotNull();

        this.setState({
            [field]: value
        });

        this.setState({inputIsValid:check});
        console.log(field + " " + value);
        console.log(this.state.inputIsValid);
    }

    handleSubmit(event:any) {
        event.preventDefault();
        console.log(event);
        console.log(this.checkInputNotNull())
        this.setState({loading:true});
        this.setState({response:'Thank you for your request! Please check your email to find your booking confirmation!'})
        console.log (this.state.seletedTime + " " + this.state.email + " " + this.state.clinicIDDate +" ")
        // await axios.post(
        //   '',
        //   { timeSlot: `${timeSlot}`, email: `${email}`, clinicIDDate: `${bookingID}`, clinic: `${clinic}`, date: `${date}` }
        // );
    }

    validateEmail(){
        // const errors = {};
        // const regEx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        // if (regEx.test(email)){
        //   console.log('Invalid email address')
        // }
        console.log("test: " + this.state.email)
        // return(validator.isEmail(this.state.email))  
        return EmailValidator.validate(this.state.email)
     }

     checkAvailabitily(timeSlots:any){
        let isAvailable=false;
        for(const element of timeSlots){
            if(element.available===true){
                isAvailable=true;
                console.log(element)
            }

        }
        return isAvailable;
     }

     checkInputNotNull(){
        return(this.state.seletedTime!== "" && this.validateEmail())
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
                                        <>{this.state.timeSlots.map((slot: { available: boolean; time: string; }) => {
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
                            <label htmlFor="seletedTime">Select a slot*</label>
                            <Form.Select name="seletedTime" onChange={this.handleChange}>
                                <option id={"11:30"} value={"11:30"}>11:30</option>
                                <option id={"14:30"} value={"11:30"}>14:30</option>
                                {this.state.timeSlots.forEach((slot: { available: boolean; time: string; }) => {
                                    if(slot.available){
                                        console.log(slot.time)
                                        return <option value={slot.time}>{slot.time}</option>
                                    }
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
                        <button className="btn btn-primary btn-block" onClick={this.handleSubmit} disabled={!this.state.inputIsValid}> 
                        
                            {this.state.loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Make Appointment</span>
                        </button>
                        </div>
                    </>

                    )}
                    

                    <button className="btn btn-outline-info" >                 
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
