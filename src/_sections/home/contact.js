import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Context from '../../_context';
import { Button } from '../../_components/buttons';
import { navigate } from 'gatsby';

const SectionCont = styled.div`
  padding: 2rem 0;
`
const SectionText = styled.p`
  text-align: center;
  @media(min-width: 768px){
    text-align: left;
    font-size: 1.5rem;
  }
`

const Divider = styled.div`
  height: 1px;
  background-color: #dadada;
  width: 100%;
`
const ContactButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #2a2a2a;
  min-height: 44px;
  width: 100%;
  color: #2a2a2a;
  font-family: "Proxima Nova", 'Montserrat', sans-serif;
  font-size: 28px;
  text-transform: uppercase;
  padding: .5rem 0;
  letter-spacing: 0.35px;
  transition: 250ms ease;
  &:hover{
    background-color: #2a2a2a;
    color: #fff;
  }
`

export default ()=> {
  const sectionText = useContext(Context).home.contact.title;
  return(
    <Fragment>
      <Container>
        <SectionCont>
            <Row align="center">
              <Col xs={12} md={9}>
                <SectionText>
                  {sectionText}
                </SectionText>          
              </Col>
              <Col xs={12} md={3}>
                <ContactButton outlined primary block onClick={()=> navigate("/contact")}>
                  Contactanos
                </ContactButton>
              </Col>
            </Row>
        </SectionCont>
      </Container>
      <Divider />
    </Fragment>
  )
}