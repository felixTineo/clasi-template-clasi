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
  padding: 1rem;
  margin-left: ${props => props.index !== 0 && props.desktop ? "1rem" : "0"};
  padding-left: ${props => props.index === 0 && props.desktop ? "0" : "1rem"};
`
const ServiceTitle = styled.p`
  color: ${props => props.theme.main.primaryColor};
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
        <CarouselProvider
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