import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { appointmentApi } from "../services/appointment";

import AppointmentType from "../types/AppointmentType";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as EmailValidator from 'email-validator';
import "bootstrap/dist/css/bootstrap.min.css";
//import { appointmentApi } from "../services/appointmentApi";
//import { clinicApi } from "../services/clinicApi";


// const validator = require('validator');

class BookAppointmentForm extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            timeSlots :props.data.timeSlots,
            clinicId: props.data.clinicId,
            date: props.data.date,
            seletedTime: '',
            time: '',
            email: '',
            loading: false,
            inputIsValid: false,
            response : ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.checkInputNotNull = this.checkInputNotNull.bind(this);
    }

    componentDidMount(): void {
        async function getTimeSlots() {
            const data = await appointmentApi.getAppointments("1","20230104"); //to be replaced with data from props
            return data;
        }

        getTimeSlots().then(resp => {
            console.log(resp.data.timeSlots);
            this.setState({timeSlots: resp.data.timeSlots});  
          })
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
        console.log(this.checkInputNotNull());
        this.setState({loading:true});
        //this.setState({response:'Thank you for your request! Please check your email to find your booking confirmation!'});

        const data: AppointmentType = {
            clinicId: this.state.clinicId,
            date: this.state.date,
            time: this.state.selectedTime,
            email:  this.state.email,
        }

        appointmentApi.makeAppointment(data)
            .then((response: any) => {
                this.setState({response:'Thank you for your request! Please check your email to find your booking confirmation!'});
                console.log(response);
            })
            .catch((err: Error) => {
                this.setState({response:'We could not process your request! Please try again later!'});
                console.log(err);
                
            })
    }

    validateEmail(){
        console.log("test: " + this.state.email)
        return EmailValidator.validate(this.state.email)
    }

    checkAvailabitily(timeSlots:any){
        let isAvailable=false;
        for(const element of timeSlots){
            if(element.available===true){
                isAvailable=true;
                //console.log(element)
            }
        }
        return isAvailable;
    }

    checkInputNotNull(){
        return(this.state.selectedTime!== "" && this.validateEmail())
    }

     
    // function routeChange(){ 
    //     let navigate = useNavigate();
    //     let path = `/`; 
    //     navigate(path);
    // }

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
                    <label htmlFor="selectedTime">Select a slot*</label>
                    <Form.Select name="selectedTime" onChange={this.handleChange}>
                        {this.state.timeSlots.map((slot: { available: boolean; time: string; }) => {
                            if(slot.available){
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
            
            <Link to='/'>                
                <button className="btn btn-outline-info" >                 
                    <span>Return to date and clinic selection</span>
                </button>
            </Link>

            {this.state.response && (
            <div className="form-group">
                <div className="alert alert-success" role="alert">
                {this.state.response}
                </div>
            </div>
            )}
        </form>
    </div>
    )}

}

export default BookAppointmentForm;
