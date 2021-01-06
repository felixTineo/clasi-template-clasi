import React, { useState, useEffect, useContext } from 'react';
import context from '../../_context'
import styled from 'styled-components';
import Logo from './logo';
import Link from '../../_components/link';
import { gsap } from 'gsap';
import { Button, Responsive as ButtonResponsive } from '../../_components/buttons';
import RateBar from './rate-bar';
import { FacebookFilled, InstagramFilled, TwitterCircleFilled, LinkedinFilled, YoutubeFilled } from '@ant-design/icons';

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
const SocialCont = styled.nav`
  text-align: center;
`
const SocialLink = styled.a`
  margin-left: .8rem;
  color: #fff;
  font-size: 1.3rem;
  transition: 250ms ease;
  &:visited{
    color: #fff;
  }
  &:hover{
    color: rgba(255, 255, 255, .8);
  }
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
      <Logo/>
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
        <SocialCont>
        <h3>Siguenos en:</h3>         
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
      </NavContainer>
    </MainCont>
  )
}