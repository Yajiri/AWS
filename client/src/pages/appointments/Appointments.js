import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../MediaQueries'

import DatePicker from '../../components/DatePicker/index'
import TimePicker from '../../components/TimePicker/index'

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
  overflow: hidden;
  width: 100%;
}
`

const DateTime = styled.div`
display: grid;
margin-top: 3rem;
`

const Calendar = styled.div`
width: 100%;
position: relative;

@media (min-width: ${breakpoints.mobileMin}) {
  left: 0;
  overflow: hidden;
  width: 42%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;

}
`
const MobileTime = styled.div`
display: inline;

@media (min-width: ${breakpoints.mobileMin}) {
  display: none;
}
`

const DesktopTime = styled.div`
display: none;
position: relative;

@media (min-width: ${breakpoints.mobileMin}) {
  display: inline;
  right: 0;
  width: 60%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
      
}
`

const Appointments = () => {
  return (

    <MainCointainer>
      <Box>
        <h1>Book a Visit</h1>
        <h3>Make an appointment with Dr. "name".</h3>
        <h5>You have selected "date" at "time"</h5>

      </Box>
      <DateTime>
        <Calendar>
          <DatePicker />
        </Calendar>
        <DesktopTime>
          <TimePicker />
        </DesktopTime>
      </DateTime>
    </MainCointainer>
    
  )
}

export default Appointments