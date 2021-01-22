import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../_context';
import { FormProperty } from '../../_components/forms'

const MainCont = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ), url("${props => props.theme.home.hero.background}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff !important;
  @media(min-width: 768px){
    min-height: 100vh;
  }
`

const Title = styled.h1`
  font-weight: 300;
  max-width: 95%;
  font-size: 32px;
  text-align: center;
  text-shadow: rgba(255, 255, 255, 0.6) 1px 1px 1px, rgba(0, 0, 0, 0.6) -1px -1px 1px;
  font-family: 'Montserrat', sans-serif;
  @media(min-width: 768px){
    max-width: 50%;
    font-size: 66px;
    letter-spacing: .1px;
  }
`
const DownButton = styled.a`
  text-decoration: none;
  position: absolute;
  bottom: 30px;
`
const SvgCont = styled.svg`
  stroke: #fff;
  transition: 250ms ease;
  ${DownButton}:hover & {
    stroke: ${props => props.theme.main.primaryColor};
  }
`

export default ()=> {
  const state = useContext(Context);

  return(
    <MainCont>
      <Title>
        {state.home.hero.title}
      </Title>
      <FormProperty />
      <DownButton href="#properties">
        <SvgCont width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="14.5"/>
          <path d="M19.2426 14L15 18.2427L10.7574 14" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgCont>
      </DownButton>
    </MainCont>
  )
}