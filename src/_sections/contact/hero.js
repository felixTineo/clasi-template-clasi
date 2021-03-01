import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import Context from '../../_context';

const MainCont = styled.section`
  background-image: linear-gradient(rgba(18, 17, 86, .6), rgba(18, 17, 86, .6) ), linear-gradient(rgba(18, 17, 86, .6), rgba(18, 17, 86, .6) ), url("/6037ca5f71794.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
const InnerCont = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 125.27px;
  @media(min-width: 768px){
    justify-content: flex-start;
    height: calc(100vh - 154.27px);
    padding-top: 0;
  }
`;
const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-weight: 400;
  @media(min-width: 768px){
  }
`

export default ()=> {
  const state = useContext(Context).about;
  return(
    <MainCont>
      <Container>
        <InnerCont>
          <Title>
            {state.hero.title}
          </Title>
        </InnerCont>
      </Container>
    </MainCont>
  )
}