import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import Context from '../../_context';

const MainCont = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("/covid.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  text-shadow: rgba(255, 255, 255, 0.6) 1px 1px 1px, rgba(0, 0, 0, 0.6) -1px -1px 1px;
  @media(min-width: 768px){
    font-size: 66px;
    letter-spacing: .1px;
  }
  
`
const InnerCont = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width: 768px){
    justify-content: flex-start;
  }
`;
const MainTitle = styled.h2`
  text-transform: uppercase;
  color: #212121;
  margin-top: 145.39px;
  margin-bottom: 0;
  background-color: #f2f1f0;
  padding: 1.5rem;
  padding-top: 2.3rem;
  letter-spacing: .5rem;
  text-align: center;
`
const Title = styled.h1`
  color: #fff;
  text-align: center;
  @media(min-width: 768px){
    width: 70%;
    text-align: left;
  }
`

export default ()=> {
  const state = useContext(Context).about;
  return(
    <Fragment>
      <MainTitle>
        Protocolo COVID-19
      </MainTitle>
    <MainCont>
      <Container>
        <InnerCont>
          <Title>
            
          </Title>
        </InnerCont>
      </Container>
    </MainCont>
    </Fragment>
  )
}