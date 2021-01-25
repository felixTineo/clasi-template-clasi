import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { v1 as uuid } from 'uuid';

const MainCont = styled.section`
  padding: 4rem 0 0;
  @media(min-width: 768px){
    padding: 4rem 0;
  }
`

const Title = styled.h2`
  font-size: 50px;
  color: ${props => props.theme.main.primaryColor};
  font-weight: 300;
  margin-bottom: 7rem;
  text-align: center;
  color: #000;
  letter-spacing: .5rem;
  font-size: 28px;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4rem;
  @media(min-width: 768px){
    margin: 0;
    margin-bottom: 4rem;
  }
`
const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  object-position: cover;
`
const Name = styled.p`
  margin-top: 2rem;
  margin-bottom: .2rem;
  font-size: 20px;
  text-align: center;
`
const Position = styled.p`
  margin: 0;
  margin-bottom: .2rem;
  color: ${props => props.hasPosition ? "#6582a3" : "transparent"};
  font-size: 14px;
  text-align: center;
`
const Description = styled.p`
  //height: 95px;
  overflow: hidden;
  text-align: center;
  margin: .5rem 0;
`
const Ubication = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`
const SubUbication = styled(Ubication)`
  color: ${props => props.hasSub ? "#e20076" : "transparent"};
  margin-bottom: 1.5rem;
  font-weight: normal;
`
const Phone = styled.a`
  text-decoration: none;
  width: 100%;
  background-color: #000;
  font-size: 1rem;
  height: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: .5rem;
`
const Mail = styled.p`
  margin: 0;
  font-size: 14px;
`
const ContactCont = styled.ul`
  color: ${props => props.theme.main.primaryColor};
  list-style: none;
  padding: 0;
  margin: 0;
`
const ContactInfo = styled.li`
  font-weight: bold;
  text-align: center;
`

export default ()=> {
  const state = useContext(Context).about.team;
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>
              NUESTRO EQUIPO
            </Title>
          </Col>
          <Col xs={12} md={3} key={uuid()}>
            <Card>
              <Avatar src={state.items[0].avatar} alt={state.items[0].lastName} />
              <Name>{state.items[0].fullName}</Name>
              <br />
              <Position hasPosition>
                Ingeniero Comercial
              </Position>
              <Position hasPosition>
                Tasador Inmobiliario y Agrícola
              </Position>
              <Description>
                Gerente General
              </Description>
              <Ubication>
                Región Metropolitana | V Región
              </Ubication>
              <SubUbication>
                Casa Matriz
              </SubUbication>              
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56942835382`}>
                +56 9 4283 5382
              </Phone>
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56232559596`}>
                +56 2 3255 9596
              </Phone>           
              <Mail>
                luis@lwpropiedades.cl
              </Mail>   
            </Card>
          </Col>     
          <Col xs={12} md={3} key={uuid()}>
            <Card>
              <Avatar src={state.items[1].avatar} alt={state.items[1].lastName} />
              <Name>{state.items[1].fullName}</Name>
              <br />
              <Position>
                Ingeniero Comercial
              </Position>
              <Position>
                Tasador Inmobiliario y Agrícola
              </Position>
              <Description>
                Ejecutiva Inmobiliaria
              </Description>
              <Ubication>
              Región Metropolitana
              </Ubication>
              <SubUbication hasSub>
                Casa Matriz
              </SubUbication>
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56938792076`}>
                +56 9 3879 2076
              </Phone>
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56232559596`}>
                +56 2 3255 9596
              </Phone>           
              <Mail>
                h.alcantara@lwpropiedades.cl
              </Mail>   
            </Card>
          </Col>    
          <Col xs={12} md={3} key={uuid()}>
            <Card>
              <Avatar src={state.items[2].avatar} alt={state.items[2].lastName} />
              <Name>{state.items[2].fullName}</Name>
              <Position>
                Ingeniero Comercial
              </Position>
              <Position>
                Tasador Inmobiliario y Agrícola
              </Position>
              <Description>
              Asociada Inmobiliaria
              </Description>
              <Ubication>
              Región Metropolitana
              </Ubication>
              <SubUbication hasSub>
              Las Condes | Lo Barnechea
              </SubUbication>
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56962138939`}>
              +56 9 6213 8939
              </Phone>
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56232559596`}>
              +56 2 3255 9596
              </Phone>           
              <Mail>
                francisca@lwpropiedades.cl
              </Mail>   
            </Card>
          </Col>       
          <Col xs={12} md={3} key={uuid()}>
            <Card>
              <Avatar src={state.items[5].avatar} alt={state.items[5].lastName} />
              <Name>{state.items[5].fullName}</Name>
              <br />
              <Position>
                Ingeniero Comercial
              </Position>
              <Position>
                Tasador Inmobiliario y Agrícola
              </Position>
              <Description>
              Asociada Inmobiliaria
              </Description>
              <Ubication>
              Región Metropolitana
              </Ubication>
              <SubUbication hasSub>
              Vitacura
              </SubUbication>
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56935248789`}>
                +56 9 3524 8789
              </Phone>
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56232559596`}>
                +56 2 3255 9596
              </Phone>           
              <Mail>
              c.ortiz@lwpropiedades.cl
              </Mail>   
            </Card>
          </Col>              
          <Col xs={12} md={3} key={uuid()}>
            <Card>
              <Avatar src={state.items[3].avatar} alt={state.items[3].lastName} />
              <Name>{state.items[3].fullName}</Name>
              <br />
              <Position>
                Ingeniero Comercial
              </Position>
              <Position>
                Tasador Inmobiliario y Agrícola
              </Position>
              <Description>
              Asociada Inmobiliaria
              </Description>
              <Ubication>
              Región Metropolitana
              </Ubication>
              <SubUbication hasSub>
              Providencia | La Reina | Ñuñoa
              </SubUbication>
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56988983632`}>
                +56 9 8898 3632
              </Phone>
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56232559596`}>
                +56 2 3255 9596
              </Phone>           
              <Mail>
                e.albornoz@lwpropiedades.cl
              </Mail>   
            </Card>
          </Col>     
          <Col xs={12} md={3} key={uuid()}>
            <Card>
              <Avatar src={state.items[4].avatar} alt={state.items[4].lastName} />
              <Name>{state.items[4].fullName}</Name>
              <br />
              <Position>
                Ingeniero Comercial
              </Position>
              <Position>
                Tasador Inmobiliario y Agrícola
              </Position>
              <Description>
              Asociada Inmobiliaria
              </Description>
              <Ubication>
              Región Metropolitana
              </Ubication>
              <SubUbication hasSub>
              Chicureo
              </SubUbication>
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56997487079`}>
                +56 9 9748 7079
              </Phone>
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56232559596`}>
                +56 2 3255 9596
              </Phone>           
              <Mail>
              claudia@lwpropiedades.cl
              </Mail>   
            </Card>
          </Col>        
          <Col xs={12} md={3} key={uuid()}>
            <Card>
              <Avatar src={state.items[6].avatar} alt={state.items[6].lastName} />
              <Name>{state.items[6].fullName}</Name>
              <br />
              <Position>
                Ingeniero Comercial
              </Position>
              <Position>
                Tasador Inmobiliario y Agrícola
              </Position>
              <Description>
              Asociada Inmobiliaria
              </Description>
              <Ubication>
                V Región
              </Ubication>
              <SubUbication hasSub>
                Viña del Mar | Concón
              </SubUbication>
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56993224610`}>
                +56 9 9322 4610
              </Phone>
              <Phone target="_blank" rel="noopener" href={`https://api.whatsapp.com/send?phone=56232559596`}>
                +56 2 3255 9596
              </Phone>           
              <Mail>
                camila@lwpropiedades.cl
              </Mail>   
            </Card>
          </Col>                                           
          {/*
            state.items.map(m => (
              <Col xs={12} md={3} key={m.id}>
                <Card>
                  <Avatar src={m.avatar} alt={m.lastName} />
                  <Name>{m.fullName}</Name>
                  <Description>
                    {m.cv}
                  </Description>
                  <ContactCont>
                    <ContactInfo>
                      {m.email}
                    </ContactInfo>
                    <ContactInfo>
                      {m.phone}
                    </ContactInfo>
                  </ContactCont>
                </Card>
              </Col>
            ))
            */}
        </Row>
      </Container>
    </MainCont>
  )
}