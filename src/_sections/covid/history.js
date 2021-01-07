import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

const MainCont = styled.section`
  background-color:  #F2F2F2;
  padding: 6rem 0;
  padding-bottom: 2rem;
  //min-height: 100vh;
`
const HistoryCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`
const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
`
const Medidas = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
  color: #666;
  margin: 1rem 0;
`
const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`
const Footer = styled.div`
  text-align: center;
  width: 95%;
  a{
    color: ${props => props.theme.main.primaryColor};
  }
`

export default ()=> {
  const state = useContext(Context).about;
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12} md={6} push={{ md: 6 }}>
            <Image src="/covid-description.jpg" alt="historia" />
          </Col>                    
          <Col xs={12} md={6} pull={{ md: 6 }}>
            <HistoryCont>
              <Title>
                MEDIDAS DE SEGURIDAD
              </Title>
              <p>
                Entendiendo las necesidades del mercado y de nuestros clientes, hemos implementado todas las medidas de seguridad para poder seguir funcionando lo más “normal posible” bajo estrictos protocolos.
              </p>
              <Medidas>
                <li>
                  Mascarilla
                </li>
                <li>
                  Alcohol Gel
                </li>
                <li>
                  Desinfectante en spray para la suela de los zapatos
                </li>
                <li>
                  No más de 2 personas en la visita
                </li>
                <li>
                  Distanciamiento Social de 1 metro
                </li>
                <li>
                  Saludar de lejos
                </li>                                                                                
              </Medidas>
              <Footer>
                <p>
                  Antes de solicitar una visita puedes ver nuestras propiedades en los video recorrido
                  de nuestra Página web y en nuestro canal de <a rel="noopener" target="_blank" href="https://www.youtube.com/c/LWPropiedades/featured">YouTube</a>.                  
                </p>
                <p>
                  ¡Nos cuidamos por nosotros y por ustedes!
                </p>
              </Footer>
            </HistoryCont>
          </Col>
        </Row>
      </Container>
    </MainCont>
  )
}