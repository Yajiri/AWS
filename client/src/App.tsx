import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import Navbar from './Navbar/Navbar';
import DatePicker from './DatePicker/DatePicker'
import Map from './Map/Map'

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return <></>;
};

function App() {
  return (
    
    <div className="App">
      <Router>
      <Wrapper apiKey={'AIzaSyATMY5GYUwukHd29ka5l0DM2R8goauAp0g'} render={render}>
        <Navbar />
        <DatePicker />
        <Map center={{ lat: 57.7089, lng: 11.9746 }} zoom={13} />
      </Wrapper>
      </Router>
      
    </div>
  );
}

export default App;
