import styled from 'styled-components';
import { hexToHsl } from '../../_util';

export default styled.button`
  min-width: 100%;
  min-height: 44px;
  //width: ${props => props.block && "100%"};
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.primary ? props.theme.main.primaryColor : "transparent"};
  border-color: ${props => props.primary ? props.theme.main.primaryColor : "#fff"};
  color: #FFFFFF;
  transition: 250ms ease;
  font-size: 1.2rem;
  &:hover{
    background-color: ${props => props.primary ? props.theme.main.primaryColor : "#fff" };
    color: ${props => props.primary ? "#b79c4e" : props.theme.main.primaryColor};
    filter:${props => props.primary && "brightness(1.5)"};
  };
  &:active{
    background-color: ${props => props.primary ? props.theme.main.primaryColor : hexToHsl("#ffffff", 90) };
    color: ${props => props.primary ? "#fff" : props.theme.main.primaryColor};
    filter: brightness(.8);
  }  
`