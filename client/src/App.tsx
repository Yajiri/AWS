import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import Home from './Home/Home'
import BookAppointment from './Appointments/BookAppointment'

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return <></>;
};

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={
          <Wrapper apiKey={'AIzaSyATMY5GYUwukHd29ka5l0DM2R8goauAp0g'} render={render}>
            <Home />
          </Wrapper>
          } 
        />
        <Route path='/appointments' element={<BookAppointment />} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
