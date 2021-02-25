import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const DescriptioneCont = styled.div`
  padding: 2rem;
  color: #fff;
`
const DescriptionTitle = styled.h2`
  
`
const DescriptionDescription = styled.p`
  ul{
    padding-left: 2rem;
    list-style: initial;
  }
  li{

  }
`

const Description = ({ id, description, title }) => {
  return(
    <DescriptioneCont>
      <DescriptionTitle>
        {title}
      </DescriptionTitle>      
      <DescriptionDescription>
        {description}
      </DescriptionDescription>
    </DescriptioneCont>
  )
}


export default ()=> {
  const state = useContext(Context);
  const items = state.about.description.items;
  const color = state.main.primaryColor;
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={70}
          //isIntrinsicHeight={true}
          totalSlides={items.length + 1}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Description {...item} />
                </Slide>
              ))
            }
            <Slide>
              <DescriptioneCont>
                <DescriptionTitle>
                  Valores
                </DescriptionTitle>      
                <DescriptionDescription>
                  <ul>
                    <li>
                    Proactividad.
                    </li>
                    <li>
                    Profesionalismo.
                    </li>
                    <li>
                    Transparencia.
                    </li>
                    <li>
                    Tecnología.
                    </li>                                                            
                  </ul>
                </DescriptionDescription>
              </DescriptioneCont>              
            </Slide>
          </Slider>
          <ButtonBack className="carousel-back-button carousel-desc-back-button" style={{ backgroundColor: color }}>
            <img src="/chevron-left.svg" alt="chevron" />
          </ButtonBack>
          <ButtonNext className="carousel-next-button carousel-desc-next-button" style={{ backgroundColor: color }}>
            <img src="/chevron-right.svg" alt="chevron"/>
          </ButtonNext>
          {/*
            Array(items.length).fill(0).map((_,i) => <Dot style={{ backgroundColor: color }} className="carousel-text-dot" key={i} slide={i} />)
          */}
        </CarouselProvider>
      </Hidden>
{/*      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={75}
          //isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Description {...item} />
                </Slide>
              ))
            }
          </Slider>
          {
            Array(items.length).fill(0).map((_,i) => <Dot style={{ backgroundColor: color }} className="carousel-text-dot" key={i} slide={i} />)
          }
        </CarouselProvider>
        </Visible>*/}
    </Fragment>
  )
}