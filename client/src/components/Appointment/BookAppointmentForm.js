import React from "react";

class BookAppointmentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timeSlots : props.data.clinic.timeSlots,
            seletedTime: '',
            name: '',
            bookingID: Math.random(),
            clinic: props.data.clinic.name,
            date: props.data.date,
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
        // event.preventDefault();
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
                <form onSubmit={this.state.handleSubmit}>
                    <div className="form-group">
                        {this.state.timeSlots.map((slot) => (
                            <div className="radio">
                                <label>
                                    <input
                                        key={slot.time}
                                        type="radio"
                                        value={slot.time}
                                        name="selectedTime"
                                        checked={this.state.seletedTime===slot.time}
                                        disabled={slot.availableSlots<1}
                                        onChange={this.handleChange}
                                        />
                                        {slot.time}
                                </label>
                            </div>
                        ))}
                    </div>
                
                    <div className="form-group">
                    <label htmlFor="message">Name*</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                    </div>


                    <div className="form-group">
                    <button className="btn btn-primary btn-block" > 
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
