import React, { useContext, Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { chunkArray } from '../../_util';
import Context from '../../_context';
import { PropertyCard } from '../cards'
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Row, Col } from 'react-grid-system';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { v1 as uuid } from 'uuid';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default ()=> {
  const color = useContext(Context).main.primaryColor;
  const office = useContext(Context).office;
  const [items, setItems] = useState([]);
  const itemsDesk = chunkArray(items.map(item => item), 3);
  console.log("ITEMNS DESK", itemsDesk);
  useEffect(()=>{
    (async()=>{
      try{
        const data = await fetch(`https://api.clasihome.com/rest/properties?id=${office.id}&typeId=${office.typeId}&status=PUBLICADA&limit=6`);
        const result = await data.json();
        console.log("ITEMS ITEMS ITEMS", result.properties);
        setItems(result.properties);
      }catch(e){
        console.log(e);
      }
    })()
  },[]);

  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={60}
          //isIntrinsicHeight={true}
          totalSlides={itemsDesk.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              itemsDesk.map((mainItem, index) => (
                <Slide key={uuid()} index={index}>
                  <Row style={{ margin: "0 1rem" }}>
                    {
                      mainItem.map(item => (
                        <Col xs={1} xs={4}>
                          <PropertyCard {...item} />
                        </Col>
                      ))
                    }
                  </Row>
                </Slide>
              ))
            }
          </Slider>
            {
              itemsDesk.length > 1 && (
                <Fragment>
                  <ButtonBack className="carousel-back-button" style={{ backgroundColor: color }}>
                    <img src="/icons/chevron-left.svg" alt="chevron" />
                  </ButtonBack>
                  <ButtonNext className="carousel-next-button" style={{ backgroundColor: color }}>
                    <img src="/icons/chevron-right.svg" alt="chevron"/>
                  </ButtonNext>                  
                </Fragment>
              )
            }
        </CarouselProvider>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={190}
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