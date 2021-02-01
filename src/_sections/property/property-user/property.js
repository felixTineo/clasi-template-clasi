import React from 'react';
import styled from 'styled-components';
import { Row, Col, Hidden } from 'react-grid-system';
import InteractionButtons from '../interaction-buttons';
import Icons from '../../../_icons';

const MainCont = styled.div`
  padding: 2rem 1rem;
  border: 1px solid #EBEBEB;
  border-right: none;
`
const PublicObs = styled.p`
  font-weight: bold;
  margin: 2rem 0;
  white-space: pre-line;
`

const CharsCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin: 2rem 1rem;
`
const CharItemLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #002438;
`

const CharItem = ({ icon, name, value }) => {
  const Icon = Icons[icon];
  return(
    <CharItemLi>
      <span>
        <Icon className="clasi-icon" />
        <span style={{ marginLeft: 16 }}>{name}</span>
      </span>
      <span style={{ marginLeft: 16 }}>{value}</span>
    </CharItemLi>
  )
}


export default ({ description })=> {

  //const charsGeneral = description.characteristics.filter(c => c.type === "GENERAL");
  //const charsOthers = description.characteristics.filter(c => c.type !== "GENERAL");
  return(
    <MainCont>
      <Row>
        <Hidden xs>
         <InteractionButtons />
        </Hidden>
        <Col xs={12}>
          <h2 style={{ color: "#002438" }}>Características</h2>
          <Row>
            <Col xs={12} md={6}>
              <CharsCont>
                {
                  //charsGeneral.slice(0, 7).map((c) => <CharItem key={c.id} {...c} />)
                  description.characteristics.slice(0, Math.ceil(description.characteristics.length / 2)).map((c) => <CharItem key={c.id} {...c} />)
                }
              </CharsCont>
            </Col>
            <Col xs={12} md={6}>
              <CharsCont>
                {
                  //charsGeneral.slice(7, charsGeneral.length).map((c) => <CharItem key={c.id} {...c} />)
                  description.characteristics.slice(Math.ceil(description.characteristics.length / 2), description.characteristics.length).map((c) => <CharItem key={c.id} {...c} />)
                }        
              </CharsCont>      
            </Col>            
          </Row>
        </Col>
        <Col xs={12}>
          <h2 style={{ color: "#002438" }}>Descripción</h2>
          <Row>
        <Col xs={12}>
          <PublicObs>
            {description.publicObservations}
          </PublicObs>
        </Col>          
          </Row>
        </Col>        
      </Row>
    </MainCont>
  )
}