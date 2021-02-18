import React, { useState, Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Select, Input, Autocomplete } from '../inputs';
import { Button, IconButton } from '../buttons';
import { Visible, Hidden } from 'react-grid-system';
import { useNavigateForm } from '../../_hooks';
import PROPERTY_TYPE from '../../_constants/PROPERTY_TYPE.json';
import COMMUNES from '../../_constants/CITIES.json';
import { getSearchParams } from 'gatsby-query-params';
import { SearchOutlined } from '@ant-design/icons';

const Form = styled.form`
  width: 100%;
  border-radius: 6px;
  padding: 0 15px;
  margin-bottom: 1rem;
  @media(min-width: 768px){
    width: ${props => props.block ? "100%" : "60%"};
    padding: 0;
    padding-left: 5px;
    background-color: #fff;
    box-shadow: ${props => props.shadow && "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)"};
    margin-bottom:0;
  }  
`
const FormCont = styled.div`
  min-width: ${props => props.byCode ? "70%" : "100%"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FormButtonCont = styled.div`
  display :flex;
  justify-content: center;
  margin-bottom: 2rem;
  @media(min-width: 768px){
    width: 50%;
  }
`
const FormButton = styled.button`
  margin-left: ${props => props.noMargin ? "0" : "2rem"};
  color: ${props => props.active ? "#D8AD4C" : "rgba(255, 255, 255, .6)"};
  font-weight: bold;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  border-color: ${props => props.active && "#D8AD4C"};
  transition: 250ms ease;
  cursor: pointer;
  @media(min-width: 768px){
    font-size: 1.2rem;
  }
`

export default ({ block, shadow, noHome })=> {
  const [byCode, setByCode] = useState(false);
  const [filter, setFilter] = useState(false);
  const { values, onChange, onFinish, setInitial } = useNavigateForm({
    propertyType: '',
    operation: '',
    commune: '',
    stringSearch: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
    currency: '',
  });  

  const params = getSearchParams();

  useEffect(()=>{
    if(params){
      setInitial({...params, stringSearch: ''});
    }
    if(byCode){
      setInitial({
        propertyType: '',
        operation: '',
        commune: '',
        stringSearch: '',
        priceMin: '',
        priceMax: '',
        bedrooms: '',
        bathrooms: '',
        currency: '',
      })
    }
  },[params, byCode]);

  const onSubmit = (e)=> {
    e.preventDefault();
    onFinish();
  }

  return(
    <FormCont byCode={byCode}>
      {
        !noHome && (
      <FormButtonCont>
        <FormButton
          onClick={()=> setByCode(false)}
          active={!byCode}
          noMargin
        >
          Buscar propiedad
        </FormButton>
        <FormButton
          onClick={()=> setByCode(true)}
          active={byCode}
        >
          Buscar por código
        </FormButton>
      </FormButtonCont>          
        )
      }
      <Form onSubmit={onSubmit} shadow={shadow} block={block}>
        <Row gutterWidth={32} align="center">
          {
            byCode
            ?(
              <Col xs={12} md={10}>
                <Autocomplete
                  id="stringSearch"
                  onSelect={onChange}
                  selected={values.stringSearch}
                  placeholder="Ingrese el código de la propiedad"
                />
              </Col>    
            )
            :(
              <Fragment>
                <Col xs={12} md={3}>
                  <Select
                    id="propertyType"
                    onChange={onChange}
                    value={values.propertyType}
                    default="Propiedad"
                    options={PROPERTY_TYPE}
                    capitalize
                    primary
                  />
                </Col>
                <Col xs={12} md={3}>
                <Select
                    id="operation"
                    onChange={onChange}        
                    value={values.operation}          
                    default="Operación"
                    options={["VENTA", "ARRIENDO"]}
                    primary
                    capitalize
                  />
                </Col>    
                <Col xs={12} md={4}>
                  <Autocomplete
                    id="commune"
                    onSelect={onChange}
                    selected={values.commune}
                    options={COMMUNES.map(val => val.name)}
                    placeholder="Comuna"
                  />                  
                </Col>                        
              </Fragment>              
            )
          }
          <Col xs={12} md={2}>
            <Hidden xs>
              <IconButton primary>
              <SearchOutlined />
              </IconButton>
            </Hidden>
            <Visible xs>
              <Button primary block>
                <SearchOutlined />
                Buscar
              </Button>
            </Visible>
          </Col>
        </Row>
      </Form>
    </FormCont>
  )
}