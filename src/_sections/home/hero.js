import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../_context';
import { FormProperty } from '../../_components/forms'
import { DownOutlined } from '@ant-design/icons';

const MainCont = styled.section`
  padding-top: 119px;
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
  background: #000;
  padding: .5rem;
  font-size: 14px;
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff !important;
  min-width: 6rem;
`
const SvgCont = styled.span`
  color: #000;
  transition: 250ms ease;
  font-size: 1.8rem;
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
        Ver más
        <DownOutlined style={{ marginLeft: 8 }} />
      </DownButton>
    </MainCont>
  )
}