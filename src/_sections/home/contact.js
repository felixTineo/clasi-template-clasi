import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Context from '../../_context';
import { Button } from '../../_components/buttons';
import { navigate } from 'gatsby';

const MainCont = styled.div`
  background-color: rgba(0,0,0, .05);
`

const SectionCont = styled.div`
  padding: 2rem 0;
`
const SectionText = styled.p`
  text-align: center;
  @media(min-width: 768px){
    text-align: left;
  }
`

const Divider = styled.div`
  height: 1px;
  background-color: #dadada;
  width: 100%;
`

export default ()=> {
  const sectionText = useContext(Context).home.contact.title;
  return(
    <MainCont>
      <Container>
        <SectionCont>
            <Row align="center">
              <Col xs={12} md={9}>
                <SectionText>
                  ¿Deseas vender, arrendar o comprar? Cuenta con nosotros
                </SectionText>          
              </Col>
              <Col xs={12} md={3}>
                <Button outlined primary block onClick={()=> navigate("/contact")}>
                  Contáctanos
                </Button>
              </Col>
            </Row>
        </SectionCont>
      </Container>
    </MainCont>
  )
}