import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';

const MainCont = styled.div`
  background-color: transparent;
  color: #fff;
  padding: .5rem 0;
  font-size: 14px;
  @media(min-width: 768px){
    background-color: #b79c4e;
    justify-content: flex-end;
  }  
`
const RatesCont = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  @media(min-width: 768px){
    font-weight: normal;
    justify-content: flex-end;
  }
`
const RateItem = styled.li`
  margin-left: .30rem;
  &::after{
    content: " -"
  }
  @media(min-width: 768px){
    margin-left: .5rem;
    &::after{
      content: " /"
    } 
  }
`
const RateItemNoAfter = styled(RateItem)`
  &::after{
    content: ""
  }
  @media(min-width: 768px){
    &::after{
      content: ""
    } 
  }
`

export default ()=> {

  return(
    <MainCont>
      <Container>
        <RatesCont>
          <RateItem>
            UF $29.079
          </RateItem>
          <RateItem>
            UTM $51.029
          </RateItem>
          <RateItemNoAfter>
            Dólar $731
          </RateItemNoAfter>                    
        </RatesCont>
      </Container>
    </MainCont>
  )
}