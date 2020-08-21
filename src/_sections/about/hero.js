import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import Context from '../../_context';

const MainCont = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${props => props.theme.about.hero.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 45px;
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
  margin-top: 8rem;
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
            {state.hero.title}
          </Title>
        </InnerCont>
      </Container>
    </MainCont>
  )
}