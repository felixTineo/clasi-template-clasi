import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Select, Input } from '../inputs';
import { Button, IconButton } from '../buttons';
import { Visible, Hidden } from 'react-grid-system';

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
  min-width: 100%;
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
  color: ${props => props.active ? "#fff" : "rgba(255, 255, 255, .6)"};
  font-weight: bold;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  border-color: ${props => props.active && props.theme.main.primaryColor};
  transition: 250ms ease;
  cursor: pointer;
  @media(min-width: 768px){
    font-size: 1.2rem;
  }
`

export default ({ block, shadow, noHome })=> {
  const [byCode, setByCode] = useState(false);
  return(
    <FormCont>
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
      <Form onSubmit={(e) => e.preventDefault()} shadow={shadow} block={block}>
        <Row gutterWidth={32} align="center">
          <Col xs={12} md={3}>
            <Select
              default="Propiedad"
              options={["opcion 1", "opcion 2", "opcion 3"]}
            />
          </Col>
          <Col xs={12} md={3}>
            <Select
              default="Operación"
              options={["opcion 1", "opcion 2", "opcion 3"]}
            />
          </Col>    
          <Col xs={12} md={4}>
            <Input placeholder="Comuna" />
          </Col>        
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