import React from 'react'
import styled from 'styled-components';
import { breakpoints } from '../MediaQueries'

import Navbar from '../Navbar/Navbar';
import DatePicker from '../DatePicker/DatePicker'
import Map from '../Map/Map'

const MainCointainer = styled.div`
height: 100vh;
overflow:hidden;
position: relative;

h2,h3,h4,h5,h6{
  font-family: "DMSans-Regular";, sans-serif ;
  font-weight:400;
}
`
const Box = styled.div`
margin-top: 8rem;
text-align: center;

@media (min-width: ${breakpoints.mobileMin}) {
  padding: 0 2.5rem;
  text-align: left;
  
}
`

const Home = () => {

  return(
    <MainCointainer>
      <Navbar />
      <Box>
        <h2>
          Select a date and a clinic
        </h2>
        <h4>You have selected date and clinic</h4>
        <DatePicker />
        <Map center={{ lat: 57.7089, lng: 11.9746 }} zoom={13} />
      </Box>
    </MainCointainer>
  )
}

export default Home