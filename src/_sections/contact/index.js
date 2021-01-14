import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { Input, Textarea } from '../../_components/inputs';
import { Button } from '../../_components/buttons';

const MainCont = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 84.78px;
  @media(min-width: 768px){
    padding-top: 0;
  }    
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
const ImgCaptcha = styled.div`
  width: 287px;
  height: 140px;
`
const MailSpan = styled.span`
  color: ${props => props.theme.main.primaryColor};
`
const SubTitleFooter = styled(SubTitle)`
  margin-top: 4rem;
`
const ButtonContainer = styled.div`
   margin-top: 32px;
   display:flex;
   //justify-content: flex-start;
   align-items: center;
   @media(min-width: 768px){
    justify-content: flex-end;
  }   
`

export default ()=> {

  return(
    <Container>
      <MainCont>
        <Title>
          Contactanos
        </Title>
        <SubTitle>
          Envienos un mensaje y uno de nuestros asesores se pondra en contacto a la brevedad
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
                <Col xs={12}>
                  <ImgCaptcha />
                  <ButtonContainer>
                    <Button primary block>Enviar</Button>
                  </ButtonContainer>              
                </Col>
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
                <Col xs={12}>
                  <SubTitleFooter>
                    También puede escribirnos a: <MailSpan>contacto@benjamincousinopropiedades.cl</MailSpan>
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