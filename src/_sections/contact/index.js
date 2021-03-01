import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';
import { Input, Textarea } from '../../_components/inputs';
import { Button } from '../../_components/buttons';
import { LoadingOutlined } from '@ant-design/icons';



const MainCont = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 122.27px;
  @media(min-width: 768px){
    margin-top: 0;
  }
`

const Title = styled.h2`

`
const SubTitle = styled.p`

`
const Form = styled.form`
  position: relative;
  @media(min-width: 768px){
    width: 100%;
  }
`
const ImgCaptcha = styled.div`
  width: 287px;
  height: 105px;
`
const MailSpan = styled.span`
  color: ${props => props.theme.main.primaryColor};
  text-decoration: underline;
`
const SubTitleFooter = styled(SubTitle)`
  margin-top: 2rem;
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
const LoadingCont = styled.div`
  background-color: rgba(255, 255, 255, .5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.main.primaryColor};
  font-size: 2rem;
`

export default ()=> {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useReducer((current, next) => ({ ...current, ...next }), {
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = e => {
    setValues({ [e.target.id]: e.target.value });
  }

  const onSubmit = async(e)=> {
    e.preventDefault();
    setLoading(true);
    try{
      console.log(values);
      const options = {
        headers: { "Content-type" : "application/json" },
        method: "POST",
        body: JSON.stringify(values),
        mode: "cors",
      }

      const data = await fetch("/sendmail.php", options);
      const result = await data.text();
      console.log("MAIL API RESULT", result);
      setLoading(false);
      setValues({
        name: '',
        mobile: '',
        email: '',
        message: '',          
      });

    }catch(e){
      setLoading(false);
      console.log("error", e);
    }
  }
  return(
    <Container>
      <MainCont>
        <Title>
          ¿Consultas? Escríbenos y te atenderemos a la brevedad
        </Title>
        <SubTitle>
          
        </SubTitle>
        <Row>
          <Col xs={12}>
            <Form onSubmit={onSubmit}>
              {
                loading && (
                  <LoadingCont>
                    <LoadingOutlined spin />
                  </LoadingCont>
                )
              }           
              <Row>
                <Col xs={12} md={6} style={{ marginBottom: 32 }}>
                  <Row>
                    <Col xs={12} style={{ marginBottom: 32 }}>
                      <Input
                      placeholder="Nombre"
                      id="name"
                      gray
                      onChange={handleChange}
                      value={values.name}
                      />
                    </Col>
                    <Col xs={12} style={{ marginBottom: 32 }}>
                      <Input
                        placeholder="Teléfono"
                        id="mobile"
                        gray
                        onChange={handleChange}
                        value={values.mobile}
                      />
                    </Col>
                    <Col xs={12}>
                      <Hidden xs>
                        <ImgCaptcha />
                        <ButtonContainer>
                          <Button primary block>Enviar</Button>
                        </ButtonContainer>                                  
                      </Hidden>
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
                        onChange={handleChange}
                        value={values.email}
                      />                  
                    </Col>
                    <Col xs={12}>
                      <Textarea
                        placeholder="Mensaje"
                        id="message"
                        gray
                        rows={7}
                        onChange={handleChange}
                        value={values.message}
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
                        También puede escribirnos a <MailSpan>contacto@realtybrokers.cl</MailSpan>
                      </SubTitleFooter>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </MainCont>
    </Container>
  )
}