import React, { Component } from 'react'
import styled from 'styled-components';
import { breakpoints } from '../MediaQueries'

import Navbar from '../Navbar/Navbar';
import Map from '../Map/Map'
import DatePicker from '../DatePicker/DatePicker'
import Overview from './Overview'

const MainContainer = styled.div`
height: 100vh;
position: relative;

h2,h3,h4,h5,h6{
  font-family: "DMSans-Regular";, sans-serif ;
  font-weight:400;
}
`
const Box = styled.div`
text-align: center;
padding-top: 6rem;

@media (min-width: ${breakpoints.mobileMin}) {
  margin-bottom: -2rem;
  padding-top: 5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  text-align: left;
}
@media (min-width: ${breakpoints.tabletMin}) {
  margin-bottom: -5rem;
}
`

const Container = styled.div`
  display: grid;
  height: 10vh;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "main main main"
    "content content content"
    "footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (min-width: ${breakpoints.mobileMin}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "main"
      "content"
      "footer";
  }
`

const ContentBox = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  align-items: center;
  text-align: left;
  grid-area: content;
  justify-content: center;
  @media (max-width: ${breakpoints.tabletMax}) {
    flex-direction: column;
  }
`;
const Content1 = styled.div`
  padding: 0.50rem;
  width: 100%;
  height: 80%;
  @media (min-width: ${breakpoints.mobileMin}) {
    align: left;
  }
  @media (min-width: ${breakpoints.tabletMin}) {
    margin-left: 0%;
    width: 50%;
    align: left;
  }
`;
const Content2 = styled.div`
  padding: 0.5rem;
  width: 100%;
  height: 80%;
`;
const Content3 = styled(Content2)``;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  color: "palevioletred";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Home = () => {
  return(
    <MainContainer>
      <Navbar />
      <Box>
      <h2>Explore our clinics!</h2>
      <h4>Select a date and the clinic you want to visit.</h4>
      </Box>
      <Container>
        <ContentBox>
          <Content2>
            <h3>Choose a Clinic:</h3>
            <Map center={{ lat: 57.7017373, lng: 11.9707837 }} zoom={13} />
          </Content2>
          <Content1>
            <h3>Choose a Date:</h3>
            <DatePicker />
            <Content3>
              <Overview />
            <Button>Search Times</Button>
          </Content3>
          </Content1>
        </ContentBox>
      </Container>

    </MainContainer>
    
  );
}

export default Home