import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Contact from '../home/contact';
import Map from '../../_components/map';
import { WhatsAppOutlined } from '@ant-design/icons';

const MainCont = styled.section`
  //padding: 4rem 0;
  margin: 4rem 0;
  margin-bottom: 0;
`
const HeaderMapCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
`
const Title = styled.p`
  color: #fff;
  padding: 2rem;
  //text-align: center;
  margin: 0;
  font-size: 1.5rem;
`
/*const Map = styled.img`
  width: 100%;
  height: 304px;
  object-position: center;
  object-fit: cover;
`*/

const ContactButton = styled.a`
  text-decoration: none;
    min-width: 160px;
    min-height: 44px;
    border: 1px solid #fff;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #FFFFFF;
    transition: 250ms ease;
    //font-family: "Roboto";
    span{
      margin-left: .5rem;
    }
    &:visited{
      color: #fff;
    }
    &:hover{
      background-color: #fff;
      color: ${props => props.theme.main.primaryColor};
    }
    margin-bottom: 2rem;
  @media(min-width: 768px){
    margin-bottom: 0;
  }
`

export default ()=> {
  const state = useContext(Context).about.ubication;
  const { lat, lng } = useContext(Context).office;
  return(
    <MainCont>
      <HeaderMapCont>
        <Container>
          <Row align="center">
            <Col xs={12} md={9}>
              <Title>
                ¿Deseas una reunión? Coordinemos y con gusto te atendemos en Av. Vitacura 3201, Vitacura.
              </Title>
            </Col>
            <Col xs={12} md={3}>
              <ContactButton href={`https://api.whatsapp.com/send?phone=56942371486`} target="_blank" rel="noopener">
                  <WhatsAppOutlined />
                  <span>Envianos un WhatsApp</span>
              </ContactButton>                
            </Col>
          </Row>
        </Container>
      </HeaderMapCont>
      {
        lat && (
          <Map
          lat={parseFloat(lat)}
          lng={parseFloat(lng)}
          height={300}
          zoom={18}
        />         
        )
      } 
    </MainCont>
  )
}