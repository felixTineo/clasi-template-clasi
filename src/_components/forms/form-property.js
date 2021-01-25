import React, { useState, Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col, Container } from 'react-grid-system';
import { Select, Input, Autocomplete } from '../inputs';
import { Button, IconButton } from '../buttons';
import { Visible, Hidden } from 'react-grid-system';
import { useNavigateForm } from '../../_hooks';
import PROPERTY_TYPE from '../../_constants/PROPERTY_TYPE.json';
import COMMUNES from '../../_constants/CITIES.json';
import { getSearchParams } from 'gatsby-query-params';

const Form = styled.form`
  width: 100%;
  //border-radius: 6px;
  padding: 0 15px;
  margin-bottom: 1rem;
  @media(min-width: 768px){
    width: ${props => props.block ? "100%" : "70%"};
    padding: 0;
    //padding-left: 5px;
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
  color: #fff;
  font-weight: bold;
  background: transparent;
  border: none;
  border-bottom: 4px solid transparent;
  border-color: ${props => props.active && "#fff"};
  transition: 250ms ease;
  text-shadow: rgba(0, 0, 0, .5) 1px 1px 1px, rgba(0, 0, 0, .5) -1px -1px 1px;
  cursor: pointer;
  @media(min-width: 768px){
    font-size: 1.2rem;
  }
`

const FilterForm = styled.form`
  width: 100%;
  padding: 1.5rem 0;
  padding: 0 15px;
  @media(min-width: 768px){
    padding: 3rem 0;
    width: ${props => props.block ? "100%" : "70%"};
    padding: 0;
    //padding-left: 5px;
    //background-color: #fff;
    //box-shadow: ${props => props.shadow && "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)"};
    margin-bottom:0;   
    margin-bottom: 2rem;
    border: none !important;
  } 
`

export default ({ block, shadow, noHome })=> {
  const [byCode, setByCode] = useState(false);
  const [filter, setFilter] = useState(true);
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
      {
        filter && (
          <FilterForm onSubmit={e => { e.preventDefault(); onFinish() }} shadow block={block}>

            <Row>
              <Col xs={12} md={3}>
                <Input
                  id="priceMin"
                  value={values.priceMin}
                  onChange={onChange}
                  type="number"
                  min={0}
                  placeholder="Precio desde"
                  shadow
                />
              </Col>
              <Col xs={12} md={3}>
                <Input
                  id="priceMin"
                  value={values.priceMax}
                  onChange={onChange}
                  type="number"
                  min={0}                    
                  placeholder="Precio hasta"
                  shadow
                />
              </Col>
              <Col xs={12} md={2}>
                <Input
                  id="bedrooms"
                  value={values.bedrooms}
                  onChange={onChange}
                  type="number"
                  min={0}                    
                  placeholder="Dormitorios"
                  shadow
                />
              </Col>
              <Col xs={12} md={2}>
                <Input
                  id="bathrooms"
                  value={values.bathrooms}
                  onChange={onChange}
                  type="number"
                  min={0}                    
                  placeholder="Baños"
                  shadow
                />
              </Col>
              <Col xs={12} md={2}>
                <Select
                  id="currency"
                  onChange={onChange}
                  value={values.currency}
                  default="Divisa"
                  options={["CPL", "UF"]}
                  primary
                  shadow
                />
              </Col>
{/*              <Col xs={12} md={2}>
                <Button primary block shadow>Aplicar filtros</Button>
              </Col>                                                                                    
              */}
            </Row>

        </FilterForm>   
        )
      }      
      <Form onSubmit={onSubmit} shadow block={block}>
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
                    primary
                  />                  
                </Col>               
              </Fragment>              
            )
          }
          <Col xs={12} md={2}>
            <Hidden xs>
              <IconButton primary>
                <img src="/icons/search.svg" alt="buscar" />
              </IconButton>
            </Hidden>
            <Visible xs>
              <Button primary block>
                <img src="/icons/search.svg" alt="buscar" style={{ marginRight: "1rem" }} />
                Buscar
              </Button>
            </Visible>
          </Col>
        </Row>
      </Form>
    </FormCont>
  )
}