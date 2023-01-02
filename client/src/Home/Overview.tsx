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
  const [data, setData] = useState<ClinicType>();
  const [clinic, setClinic] = useState([]);
  const [selectedDate, setDate] = useState();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('clinic') || '{}');
    if (data) {
      setData(data);
      console.log(data);
    }
  }, [ref]);

  console.log(data);


  useEffect(() => {
    const selectedDate = JSON.parse(localStorage.getItem('date') || '{}');
    if (selectedDate) {
      setDate(selectedDate);
    }
  }, [ref]);

  console.log("typeof date:" + typeof selectedDate);

  let handleClick = false;

  if (data) {
    //console.log("I am clickable");
    handleClick = false;
  } else {
   //console.log("I am not clickable");
    handleClick = true;
  }

  /* If there is no selected clinic or no selected date, the button should be disabled
  ** if (!data || !selectedDate)
  **/


  return(<div ref={containerRef}>
    {data?
      <Content1>
        <h3>Clinic Information</h3>
        <h4>{`Clinic: ${data.name}`}</h4>
        <h4>{`Address: ${data.address}, ${data.city}`}</h4>

        <h4>{`Opening hours:`}</h4>
        <h5>{`\nMonday: ${data.openinghours?.monday}`}</h5>
        <h5>{`\nTuesday: ${data.openinghours?.tuesday}`}</h5>
        <h5>{`\nWednesday: ${data.openinghours?.wednesday}`}</h5>
        <h5>{`\nThursday: ${data.openinghours?.thursday}`}</h5>
        <h5>{`\nFriday: ${data.openinghours?.friday}`}</h5>
       <Button disabled={handleClick}>Search Times</Button>
      </Content1>
     : 
     <div></div>
    }
    </div>
  );
}

export default Home