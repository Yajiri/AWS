import React from 'react'
import styled from 'styled-components'

const slot = styled.div`
display: grid;
grid-template-columns: repeat(8, 1fr);
max-width: 100%;
margin: 30px auto;
grid-gap: 2rem;
background-color: #F7F7F7;
  text-align: center;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  margin: 0px 20px 0px 20px;
`

const [bookedTimes, changeBookedTimes] = useState(null);
const [individualItemHovered, changeIndividualItemHovered] = useState("");
const [checkedForBlockedTimes, changeCheckedForBlockedTimes] = useState(
  false
);

const alreadyBookedAppointments = appointmentsData
    ? appointmentsData.all_appointments.filter(
        (item) =>
          item.date === reformattedDay &&
          item.esthetician === selectedEsthetician
      )
    : null;

const TimeSlot = () => {
  return (
    <div>
      <slot>kjhdsfjhsd</slot>
    </div>
  )
}

export default TimeSlot