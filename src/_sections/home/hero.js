import React, { useContext, useCallback, useState, useReducer } from 'react';
import styled from 'styled-components';
import Context from '../../_context';
import { FormProperty } from '../../_components/forms'
import Data from '../../_context/data.class';
import { navigate } from 'gatsby';

const MainCont = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7) ), url(${props => props.theme.home.hero.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  @media(min-width: 768px){
    min-height: 85vh;
  }
`

const Title = styled.h1`
  font-weight: 300;
  max-width: 95%;
  font-size: 32px;
  text-align: center;
  @media(min-width: 768px){
    max-width: 50%;
    font-size: 50px;
  }
`
const DownButton = styled.a`
  text-decoration: none;
  position: absolute;
  bottom: 30px;
`
const SvgCont = styled.svg`
  stroke: #fff;
  transition: 250ms ease;
  ${DownButton}:hover & {
    stroke: ${props => props.theme.main.primaryColor};
  }
`

export default ()=> {
  const state = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useReducer((current, next) => ({ ...current, ...next }), {
    propertyType: '',
    operation: '',
    commune: '',
  });

  const handleChange = useCallback((e)=> {
    setFilters({ [e.target.id]: e.target.value });
  },[filters]);

  const onFinish = values => {
    console.log(values);
    const params = Data.makeFilters(values);
    navigate(`/properties/?builderId=${state.builderId}&id=${state.office.id}&page=0&${params}`);
  }

  return(
    <MainCont>
      <Title>
        {state.home.hero.title}
      </Title>
      <FormProperty
        onChange={handleChange}
        values={filters}
        onFinish={onFinish}
        loading={loading}
      />
      <DownButton href="#properties">
        <SvgCont width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="14.5"/>
          <path d="M19.2426 14L15 18.2427L10.7574 14" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgCont>
      </DownButton>
    </MainCont>
  )
}