import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
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
  padding: 2rem;
`
const ServiceTitle = styled.p`
  color: ${props => props.theme.main.primaryColor};
`
const ServiceDescription = styled.p`

`
const ServiceContainer = styled.div`
  display: flex;
`

const Service = ({ id, title, description }) => {
  return(
    <ServiceCont>
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
  const itemsDesk = chunkArray(itemsToChunk, 2);
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          //isIntrinsicHeight={true}
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
                    mainItem.map(item => (
                        <Service key={item.id} {...item} />
                    ))
                  }
                  </ServiceContainer>
                </Slide>
              ))
            }
          </Slider>
          <ButtonBack className="carousel-back-button carousel-text-back-button" style={{ backgroundColor: color }}>
            <img src="/chevron-left.svg" alt="chevron" />
          </ButtonBack>
          <ButtonNext className="carousel-next-button carousel-text-next-button" style={{ backgroundColor: color }}>
            <img src="/chevron-right.svg" alt="chevron"/>
          </ButtonNext>
          {
            Array(itemsDesk.length).fill(0).map((_,i) => <Dot style={{ backgroundColor: color }} className="carousel-text-dot" key={i} slide={i} />)
          }
        </CarouselProvider>
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