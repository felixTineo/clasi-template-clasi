import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import { PropertyCard } from '../cards'
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


export default ()=> {
  const color = useContext(Context).main.primaryColor;
  const items = useContext(Context).home.properties.items;
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={190}
          //isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={3}
          orientation="horizontal"
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <PropertyCard {...item} />
                </Slide>
              ))
            }
          </Slider>
          <ButtonBack className="carousel-back-button" style={{ backgroundColor: "#000" }}>
            <LeftOutlined style={{ color: "#fff" }} />
          </ButtonBack>
          <ButtonNext className="carousel-next-button" style={{ backgroundColor: "#000" }}>
            <RightOutlined style={{ color: "#fff" }} />
          </ButtonNext>
        </CarouselProvider>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={170}
          //isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <PropertyCard {...item} />
                </Slide>
              ))
            }
          </Slider>
        </CarouselProvider>        
      </Visible>
    </Fragment>
  )
}