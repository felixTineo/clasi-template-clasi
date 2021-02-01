import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';
import { Input, Textarea } from '../../_components/inputs';
import { Button } from '../../_components/buttons';

const MainCont = styled.div`
  margin-top: 145.39px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Title = styled.h1`

`
const SubTitle = styled.p`

`
const Form = styled.form`
  @media(min-width: 768px){
    width: 80%;
  }
`
const ImgCaptcha = styled.img`
  width: 287px;
  height: 73.42px;
`
const MailSpan = styled.span`
  color: #008AFC;
  text-decoration: underline;
`
const SubTitleFooter = styled(SubTitle)`
  margin-top: 4rem;
`
const ButtonContainer = styled.div`
   margin-top: 16px;
   display:flex;
   //justify-content: flex-start;
   align-items: center;
   @media(min-width: 768px){
    justify-content: flex-end;
  }   
`

const CustomButton = styled(Button)`
  background-color: #000;
  border-color: #000;
  color: #fff;
  &:hover{
    background-color: hsl(0, 0%, 10%);
    color: #fff;
  }
  &:active{
    background-color: hsl(0, 0%, 0%);
    color: #fff;
  }
`

export default ()=> {

  return(
    <Container>
      <MainCont>
        <Title>
          ¿Dudas? ¿Consultas? Estamos aquí para ayudarte
        </Title>
        <SubTitle>
          Envíanos un mensaje y una de nuestras Asociadas Inmobiliarias se pondrá en contacto a la brevedad.
        </SubTitle>
        <Form onSubmit={e=> e.preventDefault()}>
          <Row>
            <Col xs={12} md={6} style={{ marginBottom: 32 }}>
              <Row>
                <Col xs={12} style={{ marginBottom: 32 }}>
                  <Input
                  placeholder="Nombre"
                  id="name"
                  gray
                  />
                </Col>
                <Col xs={12} style={{ marginBottom: 32 }}>
                  <Input
                    placeholder="Teléfono"
                    id="phone"
                    gray
                  />
                </Col>
                <Hidden xs>
                  <Col xs={12}>
                    <ButtonContainer>
                      <CustomButton primary block>Enviar</CustomButton>
                    </ButtonContainer>              
                  </Col>
                </Hidden>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={12} style={{ marginBottom: 32 }}>
                  <Input
                    placeholder="Email"
                    id="email"
                    gray
                  />                  
                </Col>
                <Col xs={12}>
                  <Textarea
                    placeholder="Mensaje"
                    id="message"
                    gray
                    rows={7}
                  />
                </Col>
                <Visible xs>
                  <Col xs={12}>
                    <ButtonContainer>
                      <Button primary block>Enviar</Button>
                    </ButtonContainer>              
                  </Col>                  
                </Visible>
                <Col xs={12}>
                  <SubTitleFooter>
                    También puede escribirnos a <MailSpan>contacto@lwpropiedades.cl</MailSpan>
                  </SubTitleFooter>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </MainCont>
    </Container>
  )
}