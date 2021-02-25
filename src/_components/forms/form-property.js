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
import { SlidersFilled } from '@ant-design/icons';

const Form = styled.form`
  width: 100%;
  //border-radius: 6px;
  padding: 0 15px;
  margin-bottom: 1rem;
  padding: 1.5rem 15px;
  position: relative;
  @media(min-width: 768px){
    width: ${props => props.block ? "100%" : "70%"};
    padding: 0;
    //padding-left: 5px;
    background-color: #fff;
    box-shadow: ${props => props.shadow && "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)"};
    margin-bottom: 2rem;
  }  
`
const FormCont = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
const FormButtonCont = styled.div`
  display :flex;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  @media(min-width: 768px){
    width: 50%;
  }
`
const ButtonFilter = styled.button`
  background-color: ${props => props.noHome ? "transparent" : "#000"};
  min-height: ${props => !props.noHome && "44px"};
  border: none;
  width: 160px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  transition: 250ms ease;
  font-size: 1rem;
  //position: absolute;
  //right: 0;
  text-shadow: ${props => props.noHome ? "none" : "rgba(0, 0, 0, .5) 1px 1px 1px, rgba(0, 0, 0, .5) -1px -1px 1px"};
  color: ${props => props.noHome ? "#000" : "#fff"};
  position: absolute;
  right: -166px;
  &:hover{
    color: ${props => props.noHome ? "#008AFC" : "#fff"};
    background-color: ${props => props.noHome ? "transparent" : "hsl(0,0%,10%)"};
  }
`
const SvgCont = styled.svg`
fill: ${props => props.noHome ? "#000" : "#fff"};;
margin-left: 1rem;
transition: 250ms ease;
path{
  stroke: ${props => props.noHome ? "none" : "rgba(0, 0, 0, .350)"};
}
${ButtonFilter}:hover & {
  fill: ${props => props.noHome ? "#008AFC" : "#fff"};  
}
`

const FormButton = styled.button`
  margin-left: ${props => props.noMargin ? "0" : "2rem"};
  color: #fff;
  font-weight: bold;
  background: transparent;
  border: none;
  border-bottom: 4px solid transparent;
  border-color: ${props => props.active && "hsl(0, 0%, 30%)"};
  transition: 250ms ease;
  text-shadow: rgba(0, 0, 0, .5) 1px 1px 1px, rgba(0, 0, 0, .5) -1px -1px 1px;
  cursor: pointer;
  @media(min-width: 768px){
    font-size: 1.2rem;
    
  }
`

const FilterForm = styled.form`
  width: 100%;
  padding: 0 15px;
  @media(min-width: 768px){
    padding: 3rem 0;
    width: ${props => props.block ? "100%" : "70%"};
    padding: 0;
    //padding-left: 5px;
    //background-color: #fff;
    //box-shadow: ${props => props.shadow && "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)"};
    //border: none !important;
  } 
`
const CustomButton = styled(Button)`
  min-width: auto;
  background-color: #000;
  border-color: #000;
  &:hover{
    background-color: hsl(0, 0%, 10%);
    border-color: hsl(0, 0%, 10%);
  }
  &:active{
    background-color: #000;
    border-color: #000;
  }
`

export default ({ block, shadow, noHome, noHomeFilter })=> {
  const [byCode, setByCode] = useState(false);
  const [filter, setFilter] = useState(false);
  const { values, onChange, onFinish, setInitial } = useNavigateForm({
    propertyType: '',
    operation: '',
    commune: '',
    stringSearch: '',
    priceMin: '',
    priceMax: '',
    totalAreaFrom: '',
    totalAreaTo: '',
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
        totalAreaFrom: '',
        totalAreaTo: '',
        currency: '',
        bedrooms: '',
        bathrooms: '',
      })
    }
  },[params, byCode]);

  const handleByCode = ()=> {
    setByCode(true);
    setFilter(false);
  }

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
          onClick={handleByCode}
          active={byCode}
        >
          Buscar por código
        </FormButton>
      </FormButtonCont>            
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
              <CustomButton primary block>
                <img src="/icons/search.svg" alt="buscar" style={{ marginRight: "1rem" }} />
                Buscar
              </CustomButton>
            </Visible>
          </Col>
          {
          !byCode && (
            <ButtonFilter onClick={()=> setFilter(!filter)} type="button" noHome={noHome}>
              { filter ? "Menos filtros" : "Más filtros" }
              <SvgCont noHome={noHome} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.761905 3.59622H6.85714H6.92571C7.18057 4.61311 8.09452 5.32627 9.14286 5.32627C10.1912 5.32627 11.1051 4.61311 11.36 3.59622H11.4286H14.4762C14.897 3.59622 15.2381 3.25511 15.2381 2.83432C15.2381 2.41353 14.897 2.07241 14.4762 2.07241H11.4286C11.3602 2.06516 11.2912 2.06516 11.2229 2.07241C10.8515 1.25742 10.0385 0.734375 9.14286 0.734375C8.24726 0.734375 7.43418 1.25742 7.06286 2.07241C6.99448 2.06516 6.92552 2.06516 6.85714 2.07241H0.761905C0.341116 2.07241 0 2.41353 0 2.83432C0 3.25511 0.341116 3.59622 0.761905 3.59622ZM9.14286 2.28575C9.56365 2.28575 9.90476 2.62686 9.90476 3.04765C9.90476 3.46844 9.56365 3.80956 9.14286 3.80956C8.72207 3.80956 8.38095 3.46844 8.38095 3.04765C8.38095 2.62686 8.72207 2.28575 9.14286 2.28575Z"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.761905 8.92944H2.28571H2.35429C2.61458 9.939 3.52504 10.6445 4.56762 10.6445C5.6102 10.6445 6.52066 9.939 6.78095 8.92944H14.4762C14.897 8.92944 15.2381 8.58832 15.2381 8.16753C15.2381 7.74675 14.897 7.40563 14.4762 7.40563H6.62857C6.25176 6.60403 5.44575 6.09229 4.56 6.09229C3.67425 6.09229 2.86824 6.60403 2.49143 7.40563C2.42305 7.39838 2.35409 7.39838 2.28571 7.40563H0.761905C0.341116 7.40563 0 7.74675 0 8.16753C0 8.58832 0.341116 8.92944 0.761905 8.92944ZM4.57143 7.61896C4.99222 7.61896 5.33333 7.96008 5.33333 8.38087C5.33333 8.80166 4.99222 9.14277 4.57143 9.14277C4.15064 9.14277 3.80952 8.80166 3.80952 8.38087C3.80952 7.96008 4.15064 7.61896 4.57143 7.61896Z"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.761905 14.2629H7.69524C7.96074 15.2653 8.86779 15.9634 9.90476 15.9634C10.9417 15.9634 11.8488 15.2653 12.1143 14.2629H14.4762C14.897 14.2629 15.2381 13.9218 15.2381 13.501C15.2381 13.0802 14.897 12.7391 14.4762 12.7391H11.9619C11.58 11.9506 10.7809 11.4497 9.90476 11.4497C9.0286 11.4497 8.22953 11.9506 7.84762 12.7391H0.761905C0.341116 12.7391 0 13.0802 0 13.501C0 13.9218 0.341116 14.2629 0.761905 14.2629ZM9.90476 12.9524C10.3256 12.9524 10.6667 13.2936 10.6667 13.7143C10.6667 14.1351 10.3256 14.4762 9.90476 14.4762C9.48397 14.4762 9.14286 14.1351 9.14286 13.7143C9.14286 13.2936 9.48397 12.9524 9.90476 12.9524Z"/>                
              </SvgCont>
            </ButtonFilter>            
          )
        }
        </Row>
      </Form>      
      {

         filter && (
          <FilterForm onSubmit={e => { e.preventDefault(); onFinish() }} shadow block={block}>

            <Row>
              <Col xs={12} md={2}>
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
              <Col xs={12} md={2}>
                <Input
                  id="priceMax"
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
                  id="totalAreaFrom"
                  value={values.totalAreaFrom}
                  onChange={onChange}
                  type="number"
                  min={0}                    
                  placeholder="m² desde"
                  shadow
                />
              </Col>
              <Col xs={12} md={2}>
                <Input
                  id="totalAreaTo"
                  value={values.totalAreaTo}
                  onChange={onChange}
                  type="number"
                  min={0}                    
                  placeholder="m² hasta"
                  shadow
                />
              </Col>
              <Col xs={12} md={2}>
                <Select
                  id="currency"
                  onChange={onChange}
                  value={values.currency}
                  default="Moneda"
                  options={["CLP", "UF"]}
                  primary
                  shadow
                />
              </Col>
              <Col xs={12} md={2}>
                <CustomButton primary block shadow>Aplicar filtros</CustomButton>
              </Col>                                                                                    
            </Row>
            <Row>
              <Col xs={12} md={2}>
                <Input
                  id="bedrooms"
                  value={values.bedrooms}
                  onChange={onChange}
                  type="number"
                  min={0}
                  placeholder="Dormitorios"
                  shadow
                  style={{ marginTop: 32 }}
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
                  style={{ marginTop: 32 }}
                />
              </Col>    
            </Row>
        </FilterForm>   
        )
      }      
    </FormCont>
  )
}