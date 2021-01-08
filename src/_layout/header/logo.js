import React, {useContext} from 'react';
import Context from '../../_context';
import Link from '../../_components/link';
import styled from 'styled-components';

const Nav = styled.span`
  text-decoration: none;
  &:hover{
    color: #fff;
  }
  &:visited{
    color: #fff;
  }
`
const LogoImg = styled.img`
  max-width: 250px;
  //max-height: 42px;
`
const LogoText = styled.span`
  font-size: 1.5rem;
`

export default ({ dark })=> {
  const state = useContext(Context);
  return(
    <Link to={`/`}>
      {console.log("STATE", state)}
      <Nav title="Inicio">
        {
          state.main.logo.isImage
          ?(
            <LogoImg src={ dark ? state.main.logoDark.value : state.main.logo.value} />
          )
          :(
            <LogoText>
              {state.main.logo.value}
            </LogoText>
          )
        }
      </Nav>
    </Link>
  )
}