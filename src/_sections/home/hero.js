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
  background-image: linear-gradient(rgba(18, 17, 86, .6), rgba(18, 17, 86, .6) ), linear-gradient(rgba(18, 17, 86, .6), rgba(18, 17, 86, .6) ), url(${props => props.theme.home.hero.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  border-bottom: 10px solid #F7BD2D;
  @media(min-width: 768px){
    //min-height: calc(100vh - 154.27px);
  }
`

const Title = styled.h1`
  font-weight: 300;
  max-width: 95%;
  font-size: 2rem;
  text-align: center;
  @media(min-width: 768px){
    max-width: 50%;
    font-size: 2.5rem;
  }
`
const DownButton = styled.a`
  text-decoration: none;
  position: absolute;
  bottom: 1rem;
`
const SvgCont = styled.svg`
  stroke: #fff;
  transition: 250ms ease;
  ${DownButton}:hover & {
    stroke: rgb(212, 175, 55);
  }
`

export default ()=> {
  const state = useContext(Context);

  return(
    <MainCont>
      <Title>
        Compra, arrienda o vende<br />
        propiedades en Chile
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