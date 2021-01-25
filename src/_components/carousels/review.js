import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const RevieweCont = styled.div`
  padding: 2rem;
`
const ReviewAuthor = styled.p`
  font-weight: bold;
`
const ReviewDescription = styled.p`
  font-style: italic;
`

const Review = ({ id, review, author }) => {
  return(
    <RevieweCont>
      <ReviewDescription>
        {review}
      </ReviewDescription>
      <ReviewAuthor>
        {author}
      </ReviewAuthor>
    </RevieweCont>
  )
}


export default ()=> {
  const state = useContext(Context);
  const items = state.home.reviews.items;
  const color = state.main.primaryColor;
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={60}
          //isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Review {...item} />
                </Slide>
              ))
            }
          </Slider>
          <ButtonBack className="carousel-back-button carousel-text-back-button" style={{ backgroundColor: "#000" }}>
            <LeftOutlined style={{ color: "#fff" }} />
          </ButtonBack>
          <ButtonNext className="carousel-next-button carousel-text-next-button" style={{ backgroundColor: "#000" }}>
            <RightOutlined style={{ color: "#fff" }} />
          </ButtonNext>
          {
            Array(items.length).fill(0).map((_,i) => <Dot style={{ backgroundColor: "#000" }} className="carousel-text-dot" key={i} slide={i} />)
          }
        </CarouselProvider>
      </Hidden>
      <Visible xs>
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
                  <Review {...item} />
                </Slide>
              ))
            }
          </Slider>
          {
            Array(items.length).fill(0).map((_,i) => <Dot style={{ backgroundColor: "#000" }} className="carousel-text-dot" key={i} slide={i} />)
          }
        </CarouselProvider>
      </Visible>
    </Fragment>
  )
}