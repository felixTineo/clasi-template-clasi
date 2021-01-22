import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Hidden, Container, Visible } from 'react-grid-system';
import RateBar from './rate-bar';
import NavDesktop from './nav-desktop';
import NavMovil from './nav-movil';

const MainCont = styled.header`
  color: #fff;
  position: fixed;
  background-color: #F2F1F0;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1500;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, .3);
  @media(min-width: 768px){
    
  }
`

export default ()=> {

  return(
    <Fragment>
      <Hidden xs>
        <MainCont>
          <RateBar />
          <Container>
            <NavDesktop />
          </Container>
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