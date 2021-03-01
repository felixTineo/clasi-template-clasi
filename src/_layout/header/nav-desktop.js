import React, { useContext } from 'react';
import context from '../../_context'
import styled from 'styled-components';
import Logo from './logo';
import Link from '../../_components/link';
import { Button } from '../../_components/buttons';

const MainCont = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #212121;
`
const NavBar = styled.ul`
  display: flex;
  list-style: none;
`
const NavItem = styled.li`
  margin-left: ${props => props.noMargin ? 0 : "2.5rem"};
`
const NavLink = styled.span`
  color: #fff;
  transition: 250ms ease;
  text-decoration: none !important;
  &:hover{
    color: #F7BD2D;
  }
  &:visited{
    color: #F7BD2D;
  }
`
const SvgCont = styled.svg`
  fill: #fff;
  margin-right: .5rem;
  transition: 250ms ease;
  /*${Button}:hover & {
    fill: ${props => props.theme.main.primaryColor};
  }*/
`
const LoginButton = styled.a`
  min-width: 160px;
  min-height: 44px;
  border: 1px solid #b79c4e;
  border-color: #fff;
  transition: 250ms ease;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  cursor: pointer;
  &:visited{
    color: #fff;
  }  
  &:hover{
    background-color: #fff;
    color: ${props => props.theme.main.primaryColor};
  }
`

export default ()=> {
  const state = useContext(context)
  return(
    <MainCont>
      <Logo />
      <NavBar>
      <NavItem noMargin>
          <Link to={`/`}>
            <NavLink>
              Home
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
        <NavItem>
          <Link to={`/about`}>
            <NavLink>
              Nosotros
            </NavLink>
          </Link>
        </NavItem>   
{/*        <NavItem>
          <Link to="/news">
            <NavLink>
              Noticias
            </NavLink>
          </Link>
</NavItem>*/}
        <NavItem>
          <Link to={`/contact`}>
            <NavLink>
              Contacto
            </NavLink>
          </Link>
        </NavItem>       
      </NavBar>
{/*      <LoginButton
        href={`http://app.clasihome.com/login?logo=${state.main.logoDark.value}&primaryColor=${state.main.primaryColor.substring(1)}`}
      >
        Login
</LoginButton>*/}
  </MainCont>
  )
}