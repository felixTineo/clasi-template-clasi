import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Hidden, Container, Visible } from 'react-grid-system';
import RateBar from './rate-bar';
import NavDesktop from './nav-desktop';
import NavMovil from './nav-movil';

const MyContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
    max-width: 1240px;
`

const MainCont = styled.header`
  color: #fff;
  position: fixed;
  background-color: ${props => props.theme.main.primaryColor};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1500;
  @media(min-width: 768px){
    position: relative;
    //background-color: transparent;
  }
`

export default ()=> {

  return(
    <Fragment>
      <Hidden xs>
        <MainCont>
          <RateBar />
          <MyContainer>
            <NavDesktop />
          </MyContainer>
        </MainCont>
      </Hidden>
      <Visible xs>
        <MainCont>
          <Container>
            <NavMovil />
          </Container>
        </MainCont>
      </Visible>
    </Fragment>
  )
}