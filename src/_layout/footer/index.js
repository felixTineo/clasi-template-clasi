import React, { useContext } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Context from '../../_context';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import { Button } from '../../_components/buttons';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { UpOutlined, PhoneFilled, WhatsAppOutlined, ShopOutlined } from '@ant-design/icons';

const Footer = styled.footer`
  background-color: ${props => props.theme.main.primaryColor};
  color: #fff;
`
const MainFooter = styled.div`
    padding: 4rem 0;
    padding-bottom: 0;
  @media(min-width: 768px){
    padding-bottom: 4rem;
  }  
`
const FooterRightsCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  color: ${props => props.theme.main.secondaryColor};
  padding: 2rem 0;
  font-size: .8rem;
  @media(min-width: 768px){
    padding: .5rem 0;
  }  
`
const OfficeInfoCont = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 2rem;
  list-style: none;
`
const OfficeInfo = styled.li`
  color: #fff;
  margin-bottom: .5rem;
`
const FooterRights = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media(min-width: 768px){
    flex-direction: row;
    align-items: center;
  }    
`
const NavCont = styled.div`
  margin: 2rem 0;
  @media(min-width: 768px){
    margin: 0;
  }      
`
const NavLink = styled(Link)`
  color: #fff;
  transition: 250ms ease;
  text-decoration: none;
  margin-bottom: 1rem;
  @media(min-width: 768px){
    display: block;
    text-align: right;
  }
  &:visited{
    color: #fff;
  }  
  &:hover{
    color: #F7BD2D;
  }
`
const ContactButton = styled.a`
  text-decoration: none;
    min-width: 100%;
    min-height: 66px;
    border: 1px solid #fff;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #FFFFFF;
    transition: 250ms ease;
    font-size: 1.3rem;
    //font-family: "Roboto";
    span{
      margin-left: .5rem;
    }
    &:visited{
      color: #fff;
    }
    &:hover{
      background-color: #fff;
      color: ${props => props.theme.main.primaryColor};
    }
`
const SvgIcon = styled.svg`
  fill: #fff;
  margin-right: .5rem;
  ${ContactButton}:hover &{
    fill: red;
  }
`
const SocialNav = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  //color: ${props => props.theme.main.primaryColor};
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 2rem;
`

const SocialItem = styled.li`
  margin-left: .5rem;
`

const Logo = styled.img`
  object-fit: cover;
  object-position: center;
  max-width: 180px;
`

const HeaderTitle = styled.h1`
  color: ${props => props.theme.main.primaryColor};
  font-size: 1rem;
  //font-weight: bold;
`

const DevelopBy = styled.a`
  color: #fff !important;
  //font-weight: bold;
  margin-left: .5rem;
`

const LogoCont = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`
const BackTopCont = styled.div`
  display: flex;
  justify-content: flex-end;
`
const BackTop = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: #fff;
  border: 1px solid #fff;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  background: transparent;
  margin-bottom: 1rem;
  transition: 250ms ease;
  &:hover{
    background: #fff;
    color: ${props => props.theme.main.primaryColor};
  };
  &:active{
    box-shadow: none;
  }
`
 

export default ()=> {
  const office = useContext(Context).office;
  const state = useContext(Context);
  const builderId = useContext(Context).builderId;
  const handleTop = ()=> window.scrollTo(0, 0);
  return(
    <Footer>
      <MainFooter>
        <Container>
          <Row>
            <Hidden xs>
            <Col xs={12} md={4}>
              <p>Contacto:</p>
              <OfficeInfoCont>
                <OfficeInfo>
                  {office.address}
                </OfficeInfo>
                <OfficeInfo>
                  {office.phone}
                </OfficeInfo>
                <OfficeInfo>
                  {office.email}
                </OfficeInfo>
              </OfficeInfoCont>
            </Col>
            </Hidden>
            <Col xs={12} md={4}>
              <Row>
                <Col xs={12}>
                  <GatsbyLink to={`/`} style={{ textDecoration: 'none' }}>
                    <LogoCont>
                        {
                          state.main.logo.isImage
                            ?<Logo src={state.main.logo.value} alt="logo" />
                            :<HeaderTitle>{state.main.logo.value}</HeaderTitle>
                        }
                    </LogoCont>                        
                  </GatsbyLink>                  
                </Col>
                <Col xs={12}>
                  <ContactButton href={`https://wa.link/b4aqwh`} target="_blank" rel="noopener">
                      <WhatsAppOutlined style={{ color: "#06d755" }} />
                      <span>Envianos un WhatsApp</span>
                  </ContactButton>                 
                </Col>                            
                <Col xs={12}>
                  <SocialNav>
                    <SocialItem style={{ marginLeft: "1rem" }}>
                      <a href={office.facebook} target="_blank" rel="noopener">
                        <SvgIcon social={true} width="29" height="29" fill="none" version="1.1" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                          <path d="m14.457 0a14.5 14.5 0 0 0-14.457 14.5 14.5 14.5 0 0 0 14.5 14.5 14.5 14.5 0 0 0 14.5-14.5 14.5 14.5 0 0 0-14.5-14.5 14.5 14.5 0 0 0-0.042969 0zm0.91016 6h2.6328v2.9805h-1.9355c-0.3833 0-0.76953 0.39326-0.76953 0.68555v1.957h2.7012c-0.1087 1.5007-0.33203 2.873-0.33203 2.873h-2.3828v8.5039h-3.5527v-8.5059h-1.7285v-2.8613h1.7285v-2.3398c0-0.42786-0.087828-3.293 3.6387-3.293z" />
                        </SvgIcon>
                      </a>
                    </SocialItem>
                    <SocialItem>
                      <a href={office.instagram} target="_blank" rel="noopener">
                        <SvgIcon social={true} width="29" height="29" fill="none" version="1.1" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                          <path d="m14.457 0a14.5 14.5 0 0 0-14.457 14.5 14.5 14.5 0 0 0 14.5 14.5 14.5 14.5 0 0 0 14.5-14.5 14.5 14.5 0 0 0-14.5-14.5 14.5 14.5 0 0 0-0.042969 0zm-2.916 6h6.6504c3.0602 0 5.543 2.4808 5.543 5.541v6.6504c0 3.0602-2.4828 5.543-5.543 5.543h-6.6504c-3.0603 0-5.541-2.4828-5.541-5.543v-6.6504c0-3.0603 2.4808-5.541 5.541-5.541zm0 1.6621c-2.1392 0-3.8789 1.7397-3.8789 3.8789v6.6504c0 2.1392 1.7397 3.8809 3.8789 3.8809h6.6504c2.1392 0 3.8809-1.7417 3.8809-3.8809v-6.6504c0-2.1392-1.7417-3.8789-3.8809-3.8789h-6.6504zm3.3262 2.7715c2.4484 0 4.4336 1.9852 4.4336 4.4336 0 2.4484-1.9852 4.4336-4.4336 4.4336-2.4484 0-4.4336-1.9852-4.4336-4.4336 0-2.4484 1.9852-4.4336 4.4336-4.4336zm0 1.6621c-1.5273 0-2.7715 1.243-2.7715 2.7715 0 1.5273 1.2442 2.7715 2.7715 2.7715 1.5273 0 2.7715-1.2442 2.7715-2.7715 0-1.5285-1.2442-2.7715-2.7715-2.7715z"/>
                        </SvgIcon>
                      </a>
                    </SocialItem>  
                    <SocialItem style={{ marginLeft: "1rem" }}>
                      <a href="https://g.page/realty-brokers-chile?gm" target="_blank" rel="noopener">
                        <img width={30} src="/g-bussiness.svg" />
                      </a>
                    </SocialItem>                       
                  </SocialNav>
                </Col>  
              </Row>
            </Col>    
            <Col xs={12} md={4}>
              <NavCont>
                <Row>
                  <Col xs={3} md={12}>
                    <Hidden xs>
                        <BackTopCont>
                          <BackTop onClick={handleTop} href="#top">
                            <UpOutlined />
                          </BackTop>
                        </BackTopCont>
                    </Hidden> 
                    <NavLink to={`/about`}>
                      Nosotros
                    </NavLink>
                  </Col>
                  <Col xs={3} md={12}>
                    <NavLink to={`/properties`}>
                      Propiedades
                    </NavLink>                  
                  </Col>              
{/*                  <Visible md xs xxl lg xl>
                    <Col xs={6} md={12}>
                      <NavLink to="/news">
                        Noticias
                      </NavLink>                  
                    </Col>
</Visible>*/}
                  <Col xs={3} md={12}>
                    <NavLink to={`/contact`}>
                      Contacto
                    </NavLink>                  
                  </Col>       
                  <Col xs={3} md={12}>
                    <NavLink href={`http://app.clasihome.com/login?logo=${state.main.logoDark.value}&primaryColor=${state.main.primaryColor.substring(1)}`}>
                      Login
                    </NavLink>                  
                  </Col>    
                  <Visible xs>
                    <Col xs={12} md={4}>
                      <p>Contacto:</p>
                      <OfficeInfoCont>
                        <OfficeInfo>
                          {office.address}
                        </OfficeInfo>
                        <OfficeInfo>
                          {office.phone}
                        </OfficeInfo>
                        <OfficeInfo>
                          {office.email}
                        </OfficeInfo>
                      </OfficeInfoCont>
                    </Col>                    
                  </Visible>                                                     
                </Row>
              </NavCont>
            </Col>                            
          </Row>
        </Container>      
      </MainFooter>
      <FooterRightsCont>
        <Container>
          <FooterRights>
            <li>{new Date().getFullYear()} © Todos los derechos reservados</li>
            <li>Desarrollado por <DevelopBy href="https://clasihome.com/" target="_blank">Clasihome</DevelopBy></li>
          </FooterRights>
        </Container>
      </FooterRightsCont>
      
    </Footer>
  )
}
/*
              <GatsbyLink to="/" style={{ textDecoration: 'none' }}>
                <a href="/">
                    {
                      state.main.logo.isImage
                        ?<Logo src={state.main.logo.value} alt="logo" />
                        :<HeaderTitle>{state.main.logo.value}</HeaderTitle>
                    }
                </a>
              </GatsbyLink>
*/