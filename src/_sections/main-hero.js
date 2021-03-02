import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import Context from '../../_context';

const MainCont = styled.section`
  background-image: linear-gradient(rgba(18, 17, 86, .6), rgba(18, 17, 86, .6) ), linear-gradient(rgba(18, 17, 86, .6), rgba(18, 17, 86, .6) ), url(${props => props.theme.about.hero.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
const InnerCont = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width: 768px){
    justify-content: flex-start;
    height: calc(100vh - 154.27px);
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
            {state.hero.title}
          </Title>
        </InnerCont>
      </Container>
    </MainCont>
  )
}