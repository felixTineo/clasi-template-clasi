import React, { useContext, useState, useEffect } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { PropertyCarousel } from '../../_components/carousels';
import { Rectangular } from '../../_components/banners';
import { navigate } from 'gatsby';

const MainCont = styled.section`
  min-height: 100vh;
  padding: 4rem 0;
`
const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
  text-align: center;
  margin: 0;
  margin-bottom: 4rem;
`

export default ()=> {
  const state = useContext(Context).home.properties;
  const office = useContext(Context).office;
  const [items, setItems] = useState([]);

  useEffect(()=>{
    (async()=>{
      try{
        //const data = await fetch(`https://api.clasihome.com/rest/properties?id=${office.id}&typeId=${office.typeId}&status=PUBLICADA&limit=9&integration=WEB&featu#F7BD2D=true`);
        const data = await fetch(`https://api.clasihome.com/rest/properties?id=${office.id}&typeId=${office.typeId}&status=PUBLICADA&limit=9`);
        const result = await data.json();
        console.log("ITEMS ITEMS ITEMS", result.properties);
        setItems(result.properties);
      }catch(e){
        console.log(e);
      }
    })()
  },[]);  

  return(
    <MainCont id="properties">
      <Container>
        <Row>
          <Col xs={12}>
            <Title>
              {state.title}
            </Title>                 
          </Col>
          <Col xs={12}>
            <PropertyCarousel items={items} />
          </Col>
        </Row>
      </Container>
      <Rectangular
        image={state.bannerImage}
        buttonText={state.buttonText}
        title={"Encuentra aquí las mejores propiedades que tenemos disponibles"}
        icon="/marker.svg"
        onClick={()=> navigate("/properties")}
      />      
    </MainCont>
  )
}