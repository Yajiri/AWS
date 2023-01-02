import React, { Component, useState, useEffect, useRef } from 'react'
import ClinicType from '../Types/ClinicType';

import styled from 'styled-components';

const Content1 = styled.div`
  padding: 0.5rem;
  width: 100%;
  height: 80%;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  color: "palevioletred";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

type OverviewProps = {
name: string
dentists: number
address: string
city: string
}


const Home = () => {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [opened, setIsOpened] = useState<boolean>(false);
  // const [data, setData] = useState([]);
  const [clinic, setClinic] = useState<ClinicType>();
  const [selectedDate, setDate] = useState();

  const handleOnOpen = () => setIsOpened(true);
  const handleOnClose = () => setIsOpened(false);

  console.log(clinic);

  useEffect(() => {
    const clinic = JSON.parse(localStorage.getItem('clinic') || '{}');
    if (clinic) {
      setClinic(clinic);
    }
  }, [clinic]);

  console.log(clinic);

  useEffect(() => {
    const selectedDate = JSON.parse(localStorage.getItem('date') || '{}');
    if (selectedDate) {
      setDate(selectedDate);
    }
  }, [ref]);

  let handleClick = false;

  if (opened) {
    console.log("I am clickable");
    handleClick = false;
  } else {
   console.log("I am not clickable");
    handleClick = true;
  }

  /* If there is no selected clinic or no selected date, the button should be disabled
  ** if (!data || !selectedDate)
  **/


  return(<div ref={containerRef}>
    {clinic?.clinicId ?
      <Content1>
        <h3>Clinic Information</h3>

        <h4>{`Clinic: ${clinic?.name}`}</h4>
        <h4>{`Address: ${clinic?.address}, ${clinic?.city}`}</h4>

        <h4>{`Opening hours:`}</h4>
        <h5>{`\nMonday: ${clinic?.openinghours?.monday}`}</h5>
        <h5>{`\nTuesday: ${clinic?.openinghours?.tuesday}`}</h5>
        <h5>{`\nWednesday: ${clinic?.openinghours?.wednesday}`}</h5>
        <h5>{`\nThursday: ${clinic?.openinghours?.thursday}`}</h5>
        <h5>{`\nFriday: ${clinic?.openinghours?.friday}`}</h5>
        
       <Button disabled={handleClick}>Search Times</Button>
      </Content1>
     : 
     <div></div>
    }
    </div>
  );
}

export default Home