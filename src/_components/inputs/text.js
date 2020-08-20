import React from 'react';
import styled from 'styled-components';

export default styled.input`
  background-color: #fff;
  border-radius: 6px;
  padding: 5px;
  height: 44px;
  width: 100%;
  border: none;
  font-size: 1rem;
  font-family: "Relaway";
  margin-bottom: 1rem;
  @media(min-width: 768px){
    margin-bottom: 0;
  }
  &::placeholder{
    color: #878787;
  }  
`