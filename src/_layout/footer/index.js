import React, { useContext } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Context from '../../_context';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import { Button } from '../../_components/buttons';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FacebookFilled, InstagramFilled, TwitterCircleFilled, LinkedinFilled, YoutubeFilled, UpOutlined } from '@ant-design/icons';

const Footer = styled.footer`
  
`
const MainFooter = styled.div`
  padding: 4rem 0;
`
const FooterRightsCont = styled.div`
  background-color: #000;
  color: ${props => props.theme.main.secondaryColor};
  padding: 2rem 0;
  font-size: 16px;
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
  color: #8E8787;
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
  font-size: 12px;
  @media(min-width: 768px){
    flex-direction: row;
    align-items: center;
    font-size: 14px;
  }    
`
const NavCont = styled.div`
  margin: 2rem 0;
  @media(min-width: 768px){
    margin: 0;
  }      
`
const NavLink = styled(Link)`
  color: #212121;
  transition: 250ms ease;
  text-decoration: none;
  //font-weight: bold;
  margin-bottom: 1rem;
  @media(min-width: 768px){
    display: block;
    text-align: right;
  }
  &:visited{
    color: #212121;
  }  
  &:hover{
    color: #008AFC;
  }
`
const SvgIcon = styled.svg`
  fill: ${props => props.social ? props.theme.main.primaryColor : "#fff"};
  margin-right: .5rem;
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
  max-width: 250px;
`

const HeaderTitle = styled.h1`
  color: ${props => props.theme.main.primaryColor};
  font-size: 1rem;
  font-weight: bold;
`

const DevelopBy = styled.a`
  color: #fff !important;
  font-weight: bold;
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
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  background: gray;
  margin-bottom: 1rem;
  transition: 250ms ease;
  color: #000;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);
  &:hover{
    filter: brightness(1.1);
  };
  &:active{
    box-shadow: none;
  }
`

const SocialCont = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`
const SocialLink = styled.a`
  margin-left: .8rem;
  color: #000;
  font-size: 1.3rem;
  transition: 250ms ease;
  &:visited{
    color: rgba(0, 0, 0, .5);
  }
  &:hover{
    color: hsl(0, 0%, 10%);
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
  const office = useContext(Context).office;
  const state = useContext(Context);
  const builderId = useContext(Context).builderId;
  const handleTop = ()=> window.scrollTo(0, 0);
  return(
    <Footer>
      <MainFooter>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <p>Contacto:</p>
              <OfficeInfoCont>
                <OfficeInfo>
                  {office.address.split(",")[0]}
                </OfficeInfo>
                <OfficeInfo>
                  {office.address.split(",")[1]}
                </OfficeInfo>                
                <OfficeInfo>
                  {office.phone}
                </OfficeInfo>
                <OfficeInfo>
                  {office.email}
                </OfficeInfo>
              </OfficeInfoCont>
            </Col>
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
                  <CustomButton outlined primary block>
                    <SvgIcon width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8766 9.1894C12.0195 9.1894 11.1779 9.05534 10.3804 8.79178C9.98958 8.65849 9.50917 8.78077 9.27066 9.02573L7.6965 10.2141C5.87092 9.23956 4.7464 8.11541 3.78521 6.30354L4.93857 4.77039C5.23822 4.47114 5.3457 4.03401 5.21693 3.62385C4.95224 2.82213 4.81779 1.98093 4.81779 1.12343C4.81782 0.503963 4.31386 0 3.69443 0H1.12339C0.503964 0 0 0.503964 0 1.12339C0 8.22365 5.77639 14 12.8766 14C13.4961 14 14 13.496 14 12.8766V10.3127C14 9.69336 13.496 9.1894 12.8766 9.1894Z"/>
                    </SvgIcon>
                      <span>{office.phone}</span>
                  </CustomButton>                 
                </Col>                            
                <Col xs={12}>
                <SocialCont>
                  <p>Síguenos en:</p>         
                  <SocialLink href="https://www.instagram.com/lw.propiedades/" rel="noopener" target="_blank">
                    <InstagramFilled />
                  </SocialLink>
                  <SocialLink href="https://www.facebook.com/LWpropiedades-1243413362473433/" rel="noopener" target="_blank">
                    <FacebookFilled />
                  </SocialLink>
                  <SocialLink href="https://www.youtube.com/c/lwpropiedades" rel="noopener" target="_blank">
                    <YoutubeFilled />
                  </SocialLink>
                  <SocialLink href="https://www.linkedin.com/showcase/oportunidades-lw-propiedades/" rel="noopener" target="_blank">
                    <LinkedinFilled />
                  </SocialLink>
                  <SocialLink href="https://twitter.com/PropiedadesLw?s=09" rel="noopener" target="_blank">
                    <TwitterCircleFilled />
                  </SocialLink>                
                </SocialCont>
                </Col>  
              </Row>
            </Col>    
            <Col xs={12} md={4}>
              <NavCont>
                <Row>
                  <Col xs={6} md={12}>
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
                  <Col xs={6} md={12}>
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
                  <Col xs={6} md={12}>
                    <NavLink to={`/contact`}>
                      Contacto
                    </NavLink>                  
                  </Col>    
                  <Col xs={6} md={12}>
                    <NavLink to={`/covid`}>
                      Protocolo COVID-19
                    </NavLink>                  
                  </Col>                                                        
                </Row>
              </NavCont>
            </Col>                            
          </Row>
        </Container>      
      </MainFooter>
      <FooterRightsCont>
        <Container>
          <FooterRights>
            <li>Derechos Reservados: LW Propiedades® es marca registrada (INAPI n°reg. 13288873)</li>
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