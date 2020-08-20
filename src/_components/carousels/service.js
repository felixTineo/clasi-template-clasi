import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { PropertyCard } from '../cards'
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ServiceCont = styled.div`
  padding: 2rem;
`
const ServiceTitle = styled.p`
  color: ${props => props.theme.main.primaryColor};
`
const ServiceDescription = styled.p`

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
  const color = useContext(Context).main.primaryColor;
  const items = useContext(Context).home.services.items;
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          //isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={2}
          orientation="horizontal"
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Service {...item} />
                </Slide>
              ))
            }
          </Slider>
          <ButtonBack className="carousel-back-button carousel-text-back-button" style={{ backgroundColor: color }}>
            <img src="/icons/chevron-left.svg" alt="chevron" />
          </ButtonBack>
          <ButtonNext className="carousel-next-button carousel-text-next-button" style={{ backgroundColor: color }}>
            <img src="/icons/chevron-right.svg" alt="chevron"/>
          </ButtonNext>
        </CarouselProvider>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          //isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Service {...item} />
                </Slide>
              ))
            }
          </Slider>
        </CarouselProvider>        
      </Visible>
    </Fragment>
  )
}