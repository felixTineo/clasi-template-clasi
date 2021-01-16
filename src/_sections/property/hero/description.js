import React from 'react';
import styled from 'styled-components';
import { Row, Col, Visible } from 'react-grid-system';
import InteractionButtons from '../interaction-buttons';
import { EnvironmentOutlined } from '@ant-design/icons';
import { priceFormat } from '../../../_util';

const MainCont = styled.div`
  background-color: #fff;
  min-height: 100%;
  @media(min-width: 768px){
    padding: 2rem 4rem;
  }
`
const OperationCode = styled.p`
  color: ${props => props.theme.main.primaryColor};
  font-weight: bold;
`
const Title = styled.h1`
  font-weight: 300;
  font-size: 50px;
`
const Price = styled(Title)`
  font-family: 'Lato', sans-serif;
  color: ${props => props.theme.main.primaryColor};
`
const UbicationCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  margin-bottom: 2rem;
  @media(min-width: 768px){
    margin: 0;
  }
`
const SvgCont = styled.span`
  color: ${props => props.theme.main.primaryColor};
  font-size: 2rem;
  margin-right: 1rem;
`


export default ({ description })=> {
  
  return(
    <MainCont>
      {console.log("DESCTIPTION", description)}
      <Row>
        <Col xs ={12}>
          <OperationCode>
            {`${description.operation}-COD.: ${description.code}`}
          </OperationCode>
          <Title>
            {description.title}
          </Title>
          <Price>
            {`${description.currency} ${priceFormat(description.value)}`}
          </Price>
          {
            description.currency === "UF" &&
            <Price>
              {`CLP ${priceFormat(description.value * 29.079)}`}
              
            </Price>            
          }
          {/*<UbicationCont>
            <SvgCont version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <EnvironmentOutlined />
            </SvgCont>
            <span>
              {description.ubication.commune}
            </span>
          </UbicationCont>*/}
        </Col>
        <Visible xs>
          <InteractionButtons />
        </Visible>
      </Row>
    </MainCont>
  )
}

