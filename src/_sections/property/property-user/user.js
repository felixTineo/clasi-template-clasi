import React, { useContext, useState, useReducer } from 'react';
import Context from '../../../_context';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Input, Textarea } from '../../../_components/inputs';
import { Button } from '../../../_components/buttons';
import { PlusCircleOutlined, LoadingOutlined} from '@ant-design/icons';

const MainCont = styled.div`
  //background-color: #dadada;
  border: 1px solid #EBEBEB;
  height: 100%;
  @media(min-width: 768px){
    padding: 4rem;
  }
`
const UserCont = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
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
  margin-bottom: 2rem;
  @media(min-width: 768px){
    min-height: 76px;
    min-width: 76px;
    height: 120px;
    width: 120px;
    flex-grow: 0;
    flex-shrink: 1;
  }
`
const NoAvatar = styled.div`
  min-height: 60px;
  min-width: 60px;
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
`
const UserInfoItem = styled.li`
  font-weight: bold;
`
const ContactForm = styled.form`
  margin-top: 3rem;
  height: 100%;
`
const ContactFormButtons = styled.div`
  margin-top: 2rem;
`
const IconButton = styled.a`
  color: rgba(0, 0, 0, .7);
  transition: 250ms ease;
  display: flex;
  align-items: center;
  text-align: left;
  margin-top: 2rem;
  cursor: pointer;
  &:visited{
    color: rgba(0, 0, 0, .7);
  }  
  &:hover{
    color: ${props => props.theme.main.primaryColor};
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

export default ({ description })=> {
  //const description = useContext(Context).singleProperty;
  const office = useContext(Context).office;
  const user = { ...description._comercialUser[0], ...description._comercialUser_person[0] };
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useReducer((current, next) => ({ ...current, ...next }),{
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const onSubmit = async(e)=> {
    e.preventDefault();
    setLoading(true);
    try{
      const options = {
        headers: { "Content-type" : "application/json" },
        method: "POST",
        body: JSON.stringify({
          ...message,
          nameAgent: `${user.firstName} ${user.lastName}`,
          emailAgent: user.email,
        }),
        mode: "cors",
      }

      const data = await fetch("/sendmail.php", options);
      const result = await data.text();
      console.log("MAIL API RESULT", result);
      setLoading(false);
      setMessage({
        name: '',
        mobile: '',
        email: '',
        message: '',          
      })              
    }catch(e){
      setLoading(false);
      console.log("error", e);
    }
  }

  return(
    <MainCont>
      <h2>Contacto</h2>
      <UserCont>
      {
          user.avatar?(
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
            {`${user.firstName} ${user.lastName} - ${user.jobTitle}`}
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
        {
            loading && (
              <LoadingCont>
                <LoadingOutlined spin />
              </LoadingCont>
            )
          }            
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
              id="mobile"
              vertical
              value={message.mobile}
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
          <Col xs={12} md={12}>
            <IconButton href={`https://api.whatsapp.com/send?phone=${office.phone}&text=${message.message}`} alt="send whatsapp message">
              <span>¿Deseas contactarme por teléfono o enviarme un WhatsApp?</span>
              <PlusCircleOutlined style={{ marginRight: 8, fontSize: 26 }} />
            </IconButton>
          </Col>          
        </Row>
      </ContactForm>
    </MainCont>
  )
}