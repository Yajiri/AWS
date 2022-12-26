import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components';
import { breakpoints } from '../MediaQueries'

const Content1 = styled.div`
  padding: 0.5rem;
  width: 100%;
  height: 80%;
`;
type OverviewProps = {
name: string
dentists: number
address: string
city: string
}

const Home = () => {
  const [data, setClinic] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('clinic') || '{}');
    if (data) {
      setClinic(data);
    }
  }, [data])

  return(
    <Content1>
        <h3>Clinic Information</h3>
        <h4>Clinic: {data[0]}</h4>
        <h4>Address: {data[2]}, {data[3]}</h4>
        <h4>Dentists: {data[1]}</h4>        
        <h4>Opening hours:</h4>
    </Content1>
  );
}

export default Home