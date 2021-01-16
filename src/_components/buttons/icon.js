import styled from 'styled-components';
import { hexToHsl } from '../../_util';

export default styled.button`
  min-width: 100%;
  min-height: 44px;
  //width: ${props => props.block && "100%"};
  border: 1px solid transparent;
  border-radius: 6px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.primary ? props.theme.main.primaryColor : "#fff"};
  //rgba(0, 0, 0, .1)
  //border-color: ${props => props.primary ? props.theme.main.primaryColor : "#fff"};
  border-left-color: ${props => props.theme.main.primaryColor};
  color: ${props => props.primary ? "#fff" : props.theme.main.primaryColor};
  transition: 250ms ease;
  font-size: 1.2rem;
  &:hover{
    background-color: ${props => props.theme.main.primaryColor };
    color: #fff;
    filter:${props => props.primary && "brightness(1.5)"};
  };
  &:active{
    background-color: ${props => props.theme.main.primaryColor};
    color: #fff;
    filter: brightness(.8);
  }  
`