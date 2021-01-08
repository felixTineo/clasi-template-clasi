import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import Context from '../../_context';

const MainCont = styled.section`
  margin-top: 116.16px;
  background-image: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url("/covid.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  
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
    <MainCont>
      <Container>
        <InnerCont>
          <Title>
            PROTOCOLO COVID-19
          </Title>
        </InnerCont>
      </Container>
    </MainCont>
  )
}