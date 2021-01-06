import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { FormProperty } from '../../_components/forms';
import { Input, Select } from '../../_components/inputs';
import { Button } from '../../_components/buttons';
import { useWindowSize, useNavigateForm } from '../../_hooks';
import { getSearchParams } from 'gatsby-query-params';

const SectionCont = styled.div`
  margin-top: 103.59px;
  background-color: #F2F1F0;
  padding: 8rem 0 0;
`

const SearchForm = styled.form`
  width: 100%;
  margin-bottom: 2rem;
  @media(min-width: 768px){
   margin: 4rem 0 6rem;
  } 
`
const FilterForm = styled.form`
  width: 100%;
  padding: 1.5rem 0;
  @media(min-width: 768px){
   padding: 3rem 0;
  } 
`
const ButtonIcon = styled.img`
  width: 1rem;
  margin-left: .5rem;
  transform: ${props => props.rotate && 'rotate(180deg)'};
`

const ButtonFilter = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  transition: 250ms ease;
  margin-bottom: 1rem;
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
`
const SvgCont = styled.svg`
  fill: ${props => props.theme.main.primaryColor};
  margin-left: 1rem;
  ${ButtonFilter}:hover & {
    filter: brightness(1.2)
  }
`


export default ()=> {
  const size = useWindowSize();
  const [filter, setFilter] = useState(false);

  const { values, onChange, onFinish, setInitial } = useNavigateForm({
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
    currency: '',
  });
  const params = getSearchParams();

  useEffect(()=>{
    setInitial(params);
  },[params]);

  return(
    <SectionCont>
      <FilterForm onSubmit={e => { e.preventDefault(); onFinish() }}>
        <Container>
          <Row align="center">
            <Col xs={12} md={10}>
              <h1>Propiedades</h1>          
            </Col>
            <Col xs={12} md={2}>
              <ButtonFilter onClick={()=> setFilter(!filter)}>
                Más filtros
                <SvgCont width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.761905 3.59622H6.85714H6.92571C7.18057 4.61311 8.09452 5.32627 9.14286 5.32627C10.1912 5.32627 11.1051 4.61311 11.36 3.59622H11.4286H14.4762C14.897 3.59622 15.2381 3.25511 15.2381 2.83432C15.2381 2.41353 14.897 2.07241 14.4762 2.07241H11.4286C11.3602 2.06516 11.2912 2.06516 11.2229 2.07241C10.8515 1.25742 10.0385 0.734375 9.14286 0.734375C8.24726 0.734375 7.43418 1.25742 7.06286 2.07241C6.99448 2.06516 6.92552 2.06516 6.85714 2.07241H0.761905C0.341116 2.07241 0 2.41353 0 2.83432C0 3.25511 0.341116 3.59622 0.761905 3.59622ZM9.14286 2.28575C9.56365 2.28575 9.90476 2.62686 9.90476 3.04765C9.90476 3.46844 9.56365 3.80956 9.14286 3.80956C8.72207 3.80956 8.38095 3.46844 8.38095 3.04765C8.38095 2.62686 8.72207 2.28575 9.14286 2.28575Z"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.761905 8.92944H2.28571H2.35429C2.61458 9.939 3.52504 10.6445 4.56762 10.6445C5.6102 10.6445 6.52066 9.939 6.78095 8.92944H14.4762C14.897 8.92944 15.2381 8.58832 15.2381 8.16753C15.2381 7.74675 14.897 7.40563 14.4762 7.40563H6.62857C6.25176 6.60403 5.44575 6.09229 4.56 6.09229C3.67425 6.09229 2.86824 6.60403 2.49143 7.40563C2.42305 7.39838 2.35409 7.39838 2.28571 7.40563H0.761905C0.341116 7.40563 0 7.74675 0 8.16753C0 8.58832 0.341116 8.92944 0.761905 8.92944ZM4.57143 7.61896C4.99222 7.61896 5.33333 7.96008 5.33333 8.38087C5.33333 8.80166 4.99222 9.14277 4.57143 9.14277C4.15064 9.14277 3.80952 8.80166 3.80952 8.38087C3.80952 7.96008 4.15064 7.61896 4.57143 7.61896Z"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.761905 14.2629H7.69524C7.96074 15.2653 8.86779 15.9634 9.90476 15.9634C10.9417 15.9634 11.8488 15.2653 12.1143 14.2629H14.4762C14.897 14.2629 15.2381 13.9218 15.2381 13.501C15.2381 13.0802 14.897 12.7391 14.4762 12.7391H11.9619C11.58 11.9506 10.7809 11.4497 9.90476 11.4497C9.0286 11.4497 8.22953 11.9506 7.84762 12.7391H0.761905C0.341116 12.7391 0 13.0802 0 13.501C0 13.9218 0.341116 14.2629 0.761905 14.2629ZM9.90476 12.9524C10.3256 12.9524 10.6667 13.2936 10.6667 13.7143C10.6667 14.1351 10.3256 14.4762 9.90476 14.4762C9.48397 14.4762 9.14286 14.1351 9.14286 13.7143C9.14286 13.2936 9.48397 12.9524 9.90476 12.9524Z"/>                
                </SvgCont>
              </ButtonFilter>
            </Col>         
          </Row>
          <Row>
            <Col xs={12} md={2}>
              <Input
                id="priceMin"
                value={values.priceMin}
                //onChange={e => onChange({ target: { id: e.target.id, value: new Intl.NumberFormat().format(e.target.value.replace(/\./g, '')) } })}
                onChange={onChange}
                placeholder="Desde"
                shadow
              />
            </Col>
            <Col xs={12} md={2}>
              <Input
                id="priceMax"
                value={values.priceMax}
                //onChange={e => onChange({ target: { id: e.target.id, value: new Intl.NumberFormat().format(e.target.value.replace(/\./g, '')) } })}
                onChange={onChange}
                placeholder="Hasta"
                shadow
              />
            </Col>
            <Col xs={12} md={2}>
              <Input
                id="bedrooms"
                value={values.bedrooms}
                onChange={onChange}
                type="number"
                min={0}                    
                placeholder="Dormitorios"
                shadow
              />
            </Col>
            <Col xs={12} md={2}>
              <Input
                id="bathrooms"
                value={values.bathrooms}
                onChange={onChange}
                type="number"
                min={0}                    
                placeholder="Baños"
                shadow
              />
            </Col>
            <Col xs={12} md={2}>
              <Select
                id="currency"
                onChange={onChange}
                value={values.currency}
                default="Divisa"
                options={["CLP", "UF"]}
                primary
                shadow
              />
            </Col>
            <Col xs={12} md={2}>
              <Button primary block shadow>Buscar</Button>
            </Col>                                                                                    
          </Row>
        </Container>
      </FilterForm>       
        {
          filter && (
            <Container>
              <Row align="center">
                <Col xs={12}>
                  <FormProperty block shadow noHome/>
                </Col>
              </Row>
            </Container>           
          )
        }
    </SectionCont>
  )
}