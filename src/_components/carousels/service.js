import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Visible, Hidden, Row, Col } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const chunkArray = (myArray, chunk) =>{
  var results = [];
  while (myArray.length) {
      results.push(myArray.splice(0, chunk));
  }
  return results;
};

const ServiceCont = styled.div`
  padding: 1rem .8rem;
  //margin-left: ${props => props.index !== 0 && props.desktop ? "1rem" : "0"};
  //padding-left: ${props => props.index === 0 && props.desktop ? "0" : "1rem"};
  text-align: center;
`
const ServiceImg = styled.img`
  max-width: 100px;
`
const ServiceTitle = styled.p`
  color: ${props => props.theme.main.primaryColor};
  font-weight: bold;
`
const ServiceDescription = styled.p`

`
const ServiceContainer = styled.div`
  display: flex;
`

const Service = ({ id, title, description, index, desktop }) => {
  return(
    <ServiceCont index={index} desktop={desktop}>
      <ServiceTitle>
        {title}
      </ServiceTitle>
      <ServiceDescription>
        {description}
      </ServiceDescription>
    </ServiceCont>    
  )
}


export default ()=> {
  const state = useContext(Context);
  const color = state.main.primaryColor;
  const itemsMovil = state.home.services.items;
  const itemsToChunk = state.home.services.items.map(item => item);
  const itemsDesk = chunkArray(itemsToChunk, 4);
  return(
    <Fragment>
      <Hidden xs>
        <Row>
          <Col xs={3}>
            <ServiceCont index={0} desktop>
              <ServiceImg src="venta.png" alt="venta de inmuebles" />
              <ServiceTitle>
                Venta de Inmueble
              </ServiceTitle>
              <ServiceDescription>
                ¿Necesita vender? Gestionamos su propiedad para la venta en el menor tiempo posible. 
              </ServiceDescription>
            </ServiceCont>              
          </Col>
          <Col xs={3}>
            <ServiceCont desktop>
              <ServiceImg src="arriendos.png" alt="arriendo de inmuebles" />
              <ServiceTitle>
                Arriendo de Inmuebles
              </ServiceTitle>
              <ServiceDescription>
                ¿Desea arrendar su propiedad? Cuente con nuestros profesionales para realizarlo en el menor tiempo posible.
              </ServiceDescription>
            </ServiceCont>              
          </Col>         
          <Col xs={3}>
            <ServiceCont desktop>
              <ServiceImg src="administracion.png" alt="administracion de inmuebles" />
              <ServiceTitle>
                Administración de propiedades
              </ServiceTitle>
              <ServiceDescription>
                No pierda tiempo. Nosotros gestionamos y administramos su inmueble.
              </ServiceDescription>
            </ServiceCont>              
          </Col>         
          <Col xs={3}>
            <ServiceCont desktop>
              <ServiceImg src="asesoria.png" alt="asesoria de inmuebles" />
              <ServiceTitle>
                Asesoría de compra Inmobiliaria
              </ServiceTitle>
              <ServiceDescription>
                ¿Quiere comprar? Nosotros le asesoramos para que tome una mejor decisión.
              </ServiceDescription>
            </ServiceCont>              
          </Col>                              
        </Row>
{/*        <CarouselProvider
          naturalSlideWidth={100}
          //naturalSlideHeight={50}
          isIntrinsicHeight={true}
          totalSlides={itemsDesk.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              itemsDesk.map((mainItem, index) => (
                <Slide key={mainItem[0].id} index={index}>
                  <ServiceContainer>
                  {
                    mainItem.map((item, indexChild) => (
                        <Service key={item.id} {...item} index={indexChild} desktop/>
                    ))
                  }
                  </ServiceContainer>
                </Slide>
              ))
            }
          </Slider>
          </CarouselProvider>*/}
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          //isIntrinsicHeight={true}
          totalSlides={itemsMovil.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              itemsMovil.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Service {...item} />
                </Slide>
              ))
            }
          </Slider>
            {
              Array(itemsMovil.length).fill(0).map((_,i) => <Dot style={{ backgroundColor: color }} className="carousel-text-dot" key={i} slide={i} />)
            }          
          </CarouselProvider>
      </Visible>
    </Fragment>
  )
}