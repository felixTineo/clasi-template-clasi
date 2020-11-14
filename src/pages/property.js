import React, { useLayoutEffect, useReducer, useCallback } from 'react';
import Layout from '../_layout';
import Hero from '../_sections/property/hero';
import PropertyUser from '../_sections/property/property-user';
import Ubication from '../_sections/property/ubication';
import Properties from '../_sections/home/properties';
import { Row, Col, Container, Visible } from 'react-grid-system';
import Contact from '../_sections/property/property-user/user';
import { getSearchParams } from 'gatsby-query-params';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';
import Data from '../_context/data.class';

const LoadingCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.main.primaryColor};
  font-size: 3rem;
  min-height: calc(100vh - 108px);
`

export default ()=> {
  const { id } = getSearchParams();
  const [query, setQuery] = useReducer((current, next) => ({ ...current, ...next }),{
    data: null,
    loading: true,
    error: false,
  });

  const getProperty = useCallback(async()=> {
    try{
      const paginateProperties = await Data.paginateProperties({ propertyId: id });
      setQuery({ data: paginateProperties, loading: false });
    }catch(e){
      console.log(e);
      setQuery({ loading: false, error: true });
    }
  },[id])
  
  useLayoutEffect(()=> {
    if(id){
      console.log("PROPERTY ID", id);
      getProperty();
    }
  },[id]);

  return(
    <Layout>
      {
        query.loading && (
          <LoadingCont>
            <LoadingOutlined />
          </LoadingCont>    
        )
      }
      {
        query.error && (
          <LoadingCont>
            <p>Error de conexión!</p>
          </LoadingCont>           
        )
      }
      <Hero state={query.data} />
      <PropertyUser state={query.data} />
      <Ubication />
      <Properties />
      <Visible xs>
        <Container>
          <Row>
            <Col xs={12}>
              <Contact />
            </Col>
          </Row>
        </Container>
    </Visible>
    </Layout>
  )
}