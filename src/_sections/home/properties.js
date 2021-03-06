import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { PropertyCarousel } from '../../_components/carousels';
import { Rectangular } from '../../_components/banners';
import { navigate } from 'gatsby';

const MainCont = styled.section`
  min-height: 100vh;
  padding: 4rem 0;
`
const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
  text-align: center;
  margin: 0;
  margin-bottom: 4rem;
`

export default ()=> {
  const state = useContext(Context).home.properties;
  return(
    <MainCont id="properties">
      <Container>
        <Row>
          <Col xs={12}>
            <Title>
              {state.title}
            </Title>                 
          </Col>
          <Col xs={12}>
            <PropertyCarousel />
          </Col>
          <Col xs={12}>
            <Rectangular
              image={state.bannerImage}
              buttonText={state.buttonText}
              title={state.footer}
              icon="/icons/marker.svg"
              onClick={()=> navigate("/properties")}
            />
          </Col>
        </Row>
      </Container>
    </MainCont>
  )
}