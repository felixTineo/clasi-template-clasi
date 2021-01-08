import React, { useState, useEffect, useContext } from 'react';
import context from '../../_context'
import styled from 'styled-components';
import Logo from './logo';
import Link from '../../_components/link';
import { gsap } from 'gsap';
import { Button, Responsive as ButtonResponsive } from '../../_components/buttons';
import RateBar from './rate-bar';

const MainCont = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`
const NavContainer = styled.div`
  padding: 4rem 0;
  position: absolute;
  top: 0;
  left: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.main.primaryColor};
`
const NavBar = styled.ul`
  list-style: none;
`
const NavItem = styled.li`
  margin-bottom: ${props => props.noMargin ? 0 : "1rem"};
  text-align: center;
  font-size: 2rem;
  a{
    color: #fff !important;
  }
`
const NavLink = styled.span`
  color: "#fff";
  transition: 250ms ease;
  text-decoration: none;
  &:hover{
    color: #fff;
    text-decoration: underline;
  }
  &:visited{
    color: #fff;
    text-decoration: underline;
  }
`
const SvgCont = styled.svg`
  fill: #fff;
  margin-right: .5rem;
  transition: 250ms ease;
  ${Button}:hover & {
    fill: ${props => props.theme.main.primaryColor};
  }
`
const SocialCont = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`
const SocialItem = styled.li`
  margin-left: ${props => props.noMargin ? 0 : '1rem'};
`

export default ()=> {
  const [visibleNav, setVisibleNav] = useState(false);
  const builderId = useContext(context);
  useEffect(()=> {
    if(visibleNav){
      gsap.to("#nav-movil", { duration: .25, left: 0 });
    } else {
      gsap.to("#nav-movil", { duration: .25, left: "100vw" });
    }
  },[visibleNav]);

  return(
    <MainCont>
      <Logo dark/>
      <ButtonResponsive
        visible={visibleNav}
        onClick={() => setVisibleNav(!visibleNav)}
      />
      <NavContainer id="nav-movil">
        <RateBar />
        <NavBar>
          <NavItem>
            <Link to={`/about`}>
              <NavLink>
                Nosotros
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`/properties`}>
              <NavLink>
                Propiedades
              </NavLink>
            </Link>
          </NavItem>
{/*          <NavItem>
            <Link to="/news">
              <NavLink>
                Noticias
              </NavLink>
            </Link>
</NavItem>*/}
          <NavItem>
            <Link to={`/contact`}>
              <NavLink noMargin>
                Contacto
              </NavLink>
            </Link>
          </NavItem>
        </NavBar>    
        <Button>
          <SvgCont width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8766 9.1894C12.0195 9.1894 11.1779 9.05534 10.3804 8.79178C9.98958 8.65849 9.50917 8.78077 9.27066 9.02573L7.6965 10.2141C5.87092 9.23956 4.7464 8.11541 3.78521 6.30354L4.93857 4.77039C5.23822 4.47114 5.3457 4.03401 5.21693 3.62385C4.95224 2.82213 4.81779 1.98093 4.81779 1.12343C4.81782 0.503963 4.31386 0 3.69443 0H1.12339C0.503964 0 0 0.503964 0 1.12339C0 8.22365 5.77639 14 12.8766 14C13.4961 14 14 13.496 14 12.8766V10.3127C14 9.69336 13.496 9.1894 12.8766 9.1894Z"/>
          </SvgCont>
          Consultas
        </Button>            
        <SocialCont>
          <SocialItem noMargin>
            Siguenos en
          </SocialItem>
          <SocialItem>
            <NavLink href="https://facebook.com" target="_blank">
              <img src="/icons/facebook.svg" alt="facebook" />
            </NavLink>
          </SocialItem>
          <SocialItem>
            <NavLink href="https://instagram.com" target="_blank">
              <img src="/icons/instagram.svg" alt="instagram" />
            </NavLink>
          </SocialItem>          
        </SocialCont>
      </NavContainer>
    </MainCont>
  )
}