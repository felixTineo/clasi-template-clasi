import React, { useContext, useReducer } from 'react';
import Context from '../../../_context';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Input, Textarea } from '../../../_components/inputs';
import { Button } from '../../../_components/buttons';
import { PlusCircleOutlined } from '@ant-design/icons';

const MainCont = styled.div`
  padding: 4rem;
  //background-color: #dadada;
  border: 1px solid #EBEBEB;
  height: 100%;
`
const Title = styled.h2`
  text-align: center;
  @media(min-width: 768px){
    text-align: left;
  }
`
const UserCont = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media(min-width: 768px){
    flex-direction: row;
  }
`
const Avatar = styled.img`
  object-fit: cover;
  object-position: center;
  min-height: 48px;
  min-width: 48px;
  height: 60px;
  width: 60px;
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 50%;
  @media(min-width: 768px){
    min-height: 76px;
    min-width: 76px;
    height: 76px;
    width: 76px;
    flex-grow: 0;
    flex-shrink: 1;
  }
`
const NoAvatar = styled.div`
  min-height: 60px;
  min-width: 60px;
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 50%;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.main.primaryColor};
  color: #fff;
  border: 4px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  @media(min-width: 768px){
    font-size: 2rem;
    min-height: 76px;
    min-width: 76px;
    height: 120px;
    width: 120px;
  }
`
const UserInfoCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 1rem;
  text-align: center;
  @media(min-width: 768px){
    text-align: left;
  }
`
const UserInfoItem = styled.li`
  //font-weight: bold;
`
const ContactForm = styled.form`
  margin-top: 3rem;
  height: 100%;
`
const ContactFormButtons = styled.div`
  margin-top: 2rem;
`

const IconButton = styled.a`
  color: #5A5A5A;
  transition: 250ms ease;
  display: flex;
  align-items: center;
  text-align: left;
  margin-top: 2rem;
  cursor: pointer;
  &:visited{
    color: #5A5A5A;
  }  
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
`

export default ({ description })=> {
  //const description = useContext(Context).singleProperty;
  const office = useContext(Context).office;
  const user = {...description._comercialUser[0], ...description._comercialUser_person[0]};
  const [message, setMessage] = useReducer((current, next) => ({ ...current, ...next }),{
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  return(
    <MainCont>
      <Title>Contacto</Title>
      <UserCont>
      {
          user.Avatar?(
            <Avatar src={user.avatar} alt={user.lastName} />
          )
          :(
            <NoAvatar>
              <span>{user.firstName.charAt(0).toUpperCase()}</span>
              <span>{user.lastName.charAt(0).toUpperCase()}</span>
            </NoAvatar>
          )
        }
        <UserInfoCont>
          <UserInfoItem>
            {`${user.firstName} ${user.lastName}`}
          </UserInfoItem>
          <UserInfoItem>
            {`${user.phone.countryCode} ${user.phone.areaCode} ${user.phone.phoneNumber}`}
          </UserInfoItem>
          <UserInfoItem>
            {user.email}
          </UserInfoItem>
        </UserInfoCont>
      </UserCont>
      <ContactForm
        onSubmit={(e)=> e.preventDefault() }
      >
        <Row>
          <Col xs={12}>
            <Input
              placeholder="Nombre"
              gray
              id="name"
              vertical
              value={message.name}
              onChange={e => setMessage({ [e.target.id]: e.target.value })}              
            />
          </Col>
          <Col xs={12}>
            <Input
              placeholder="Teléfono"
              gray
              id="phone"
              vertical
              value={message.phone}
              onChange={e => setMessage({ [e.target.id]: e.target.value })}              
            />
          </Col>
          <Col xs={12}>
            <Input
              placeholder="Email"
              gray
              id="email"
              vertical
              value={message.email}
              onChange={e => setMessage({ [e.target.id]: e.target.value })}              
            />
          </Col>
          <Col xs={12}>
            <Textarea
              placeholder="Mensaje"
              gray
              id="message"
              vertical
              value={message.message}
              rows={6}
              onChange={e => setMessage({ [e.target.id]: e.target.value })}              
            />
          </Col>   
          <Col xs={12}>
            <ContactFormButtons>
              <Button primary outlined block>
                Enviar
              </Button>
            </ContactFormButtons>
          </Col>          
          <Col xs={12}>
            <IconButton href={`https://api.whatsapp.com/send?phone=${office.phone}&text=${message.message}`} alt="send whatsapp message">
              <span>¿Deseas contactarme por teléfono o enviarme un whatsapp?</span>
              <PlusCircleOutlined style={{ marginRight: 8, fontSize: 26 }} />
            </IconButton>
          </Col>          
        </Row>
      </ContactForm>
    </MainCont>
  )
}