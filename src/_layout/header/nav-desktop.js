import React, { useContext } from 'react';
import context from '../../_context'
import styled from 'styled-components';
import Logo from './logo';
import Link from '../../_components/link';
import { Button } from '../../_components/buttons';
import { UserOutlined } from '@ant-design/icons';

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
  color: rgba(255, 255, 255, .8);
  transition: 250ms ease;
  &:hover{
    color: #fff;
    text-decoration: underline !important;
  }
  &:visited{
    color: rgba(255, 255, 255, 1);
  }
`
const LoginButton = styled.a`
  min-width: 160px;
  min-height: 44px;
  border: 1px solid #b79c4e;
  transition: 250ms ease;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b79c4e;
  text-decoration: none;
  border-radius: 6px;
  &:visited{
    color: #b79c4e;
  }  
  &:hover{
    background-color: #b79c4e;
    color: #fff;
  }
`

export default ()=> {
  const state = useContext(context);
  return(
    <MainCont>
      <Logo />
      <NavBar>
        <NavItem noMargin>
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
{/*      <LoginButton href={`http://app.clasihome.com/login?logo=${state.main.logo.value}&primaryColor=${state.main.primaryColor.substring(1)}`}>
        <UserOutlined />
        <span style={{ marginLeft: 8 }}>Login</span>
      </LoginButton>
*/}
  </MainCont>
  )
}