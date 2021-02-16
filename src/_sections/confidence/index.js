import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';
import { Input, Textarea } from '../../_components/inputs';
import { Button } from '../../_components/buttons';
import { LoadingOutlined, CheckCircleOutlined } from '@ant-design/icons';

const MainCont = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 92px;
  @media(min-width: 768px){
    width: 100%;
    margin-top: 0;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: .5rem;  
  text-align: center;
`
const SubTitle = styled.p`
text-align: center;
margin-bottom: 2rem;
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
const VeryMainCont = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url("/service.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 2rem;
  padding-top: 1rem;
  color: #fff;
`
const DescriptionMainCont = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  @media(min-width: 768px){
    margin-bottom: 0;
  }
`
const DescriptionCont = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const DescItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
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
    <VeryMainCont>
    <Container>
      <MainCont>
        <Row>
          <Col xs={12}>
            <Title>
            Confíanos tu propiedad
          </Title>
          <SubTitle>
            Nos diferenciamos en la gestión de propiedades
          </SubTitle>            
          </Col>
          <Col xs={12} md={6}>
            <DescriptionMainCont>
              <DescriptionCont>
                <DescItem>
                  <CheckCircleOutlined style={{ marginRight: ".8rem" }} />
                  <span>
                  Analizamos el perfil del prospecto para encontrar al arrendatario idóneo.
                  </span>
                </DescItem>
                <DescItem>
                <CheckCircleOutlined style={{ marginRight: ".8rem" }} />
                  <span>
                    Nos encargamos de que los servicios y gastos comunes estén al día.                  
                  </span>
                </DescItem>
                <DescItem>
                <CheckCircleOutlined style={{ marginRight: ".8rem" }} />
                  <span>
                    Nos diferenciamos a la hora de gestionar.
                  </span>
                </DescItem>
                <DescItem>
                <CheckCircleOutlined style={{ marginRight: ".8rem" }} />
                  <span>
                    Gestionamos garantizando tu tranquilidad, cuidamos tus ganancias.                  
                  </span>
                </DescItem>                                                
              </DescriptionCont>
            </DescriptionMainCont>
          </Col>          
          <Col xs={12} md={6}>
            <Form onSubmit={onSubmit}>
              {
                loading && (
                  <LoadingCont>
                    <LoadingOutlined spin />
                  </LoadingCont>
                )
              }           
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
                <Col xs={12}>
                <ButtonContainer>
                  <Button primary block>Enviar</Button>
                </ButtonContainer>                                  
              </Col>                                     
              </Row>
            </Form>
          </Col>
        </Row>
      </MainCont>
    </Container>
    </VeryMainCont>
  )
}