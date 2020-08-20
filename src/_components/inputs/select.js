import React from 'react';
import styled from 'styled-components';

const DefaultOption = styled.option`
  color: #212121;
  font-family: "Relaway";
`
const Option = styled.option`
  color: #212121;
  font-size: 1rem;
  font-family: "Relaway";
`

const Select = styled.select`
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: "Relaway";
  color: ${props => props.primary ? props.theme.main.primaryColor : "#212121"};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; 
  background-color: #fff;
  border-radius: 6px;
  padding: 5px;
  height: 44px;
  width: 100%;
  background-image: url('/icons/chevron-select.svg');
  background-repeat: no-repeat;
  background-position: right center;
  margin-bottom: 1rem;
  color: #878787;
  cursor: pointer;
  &::-ms-expand{
    background: transparent;
  }  
  @media(min-width: 768px){
    margin-bottom: 0;
  }
`

export default (props)=> {
  return(
      <Select
        defaultChecked="propiedad"
        {...props}
      >
        <DefaultOption value="">{props.default}</DefaultOption>
        {
          props.options.map((o, index) => <Option key={index}>{o}</Option>)
        }       
      </Select>    
  )
}