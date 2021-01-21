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
  background-color: ${props => props.primary ? "#000" : "transparent"};
  border-color: ${props => props.primary ? "#000" : "#fff"};
  color: #FFFFFF;
  transition: 250ms ease;
  &:hover{
    background-color: ${props => props.primary ? hexToHsl("#000000", 10) : "#fff" };
    color: ${props => props.primary ? "#fff" : props.theme.main.primaryColor};
  };
  &:active{
    background-color: ${props => props.primary ? "#000" : hexToHsl("#ffffff", 90) };
    color: ${props => props.primary ? "#fff" : props.theme.main.primaryColor};
  }  
`