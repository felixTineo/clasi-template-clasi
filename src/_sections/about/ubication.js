import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Contact from '../home/contact';
import Map from '../../_components/map';

const MainCont = styled.section`
  padding: 4rem 0;
`
const Title = styled.p`
  background-color: ${props => props.theme.main.primaryColor};
  color: #fff;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  margin: 0;
`
/*const Map = styled.img`
  width: 100%;
  height: 304px;
  object-position: center;
  object-fit: cover;
`*/

export default ()=> {
  const state = useContext(Context).about.ubication;
  const { lat, lng } = useContext(Context).office;
  return(
    <MainCont>
      <Title>
        Encuentranos en Vitacura
      </Title>
      {
        lat && (
          <Map
          lat={parseFloat(lng)}
          lng={parseFloat(lat)}
          height={300}
          zoom={15}
        />         
        )
      } 
      <Row>
        <Col xs={12}>
          <Contact />
        </Col>
      </Row>
    </MainCont>
  )
}