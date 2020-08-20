import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Select, Input } from '../inputs';
import { Button, IconButton } from '../buttons';
import { Visible, Hidden } from 'react-grid-system';

const Form = styled.form`
  width: 100%;
  border-radius: 6px;
  padding: 0 15px;
  @media(min-width: 768px){
    width: 60%;
    padding: 0;
    padding-left: 5px;
    background-color: #fff;
  }  
`

export default ()=> {

  return(
    <Form onSubmit={(e) => e.preventDefault()}>
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
  )
}