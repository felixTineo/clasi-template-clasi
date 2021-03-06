import styled from 'styled-components';
import { hexToHsl } from '../../_util';

export default styled.button`
  min-width: 160px;
  min-height: 44px;
  width: ${props => props.block && "100%"};
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.primary ? props.theme.main.primaryColor : "transparent"};
  border-color: ${props => props.primary ? props.theme.main.primaryColor : "#fff"};
  color: #FFFFFF;
  transition: 250ms ease;
  box-shadow: ${props => props.shadow && "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)"};
  &:hover{
    background-color: ${props => props.primary ? props.theme.main.primaryColor : "#fff" };
    filter: ${props => props.primary && 'brightness(1.8)'};
    color: ${props => props.primary ? "#fff" : props.theme.main.primaryColor};
  };
  &:active{
    background-color: ${props => props.primary ? props.theme.main.primaryColor : "#fff" };
    filter: ${props => props.primary && 'brightness(1)'};
    color: ${props => props.primary ? "#fff" : props.theme.main.primaryColor};
  }  
`