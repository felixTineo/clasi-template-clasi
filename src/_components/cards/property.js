import React, { useContext } from 'react';
import context from '../../_context';
import Link from '../link';
import styled from 'styled-components';
import { truncate, priceFormat } from '../../_util';

const CardCont = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #EBEBEB;
  height: 600px;
  transition: 250ms ease;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.108337);
  margin:0 .3rem;
  &:hover{
    //box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.108337);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
                0px 2px 2px rgba(0, 0, 0, .12),
                0px 4px 4px rgba(0, 0, 0, .12),
                0px 8px 8px rgba(0, 0, 0, .12),
                0px 16px 16px rgba(0, 0, 0, .12),
                0px 32px 32px rgba(0, 0, 0, .12);
  }
  @media(min-width: 768px){
    margin:0 1rem;
  }
`
const CardImage = styled.div`
  background-image: url("${props => props.src}");
  background-position: center;
  background-size: cover;
  background-repeat: none;
  width: 100%;
  padding-top: 75%;
`
const CardInfo = styled.div`
  padding: 1rem 1rem 1.5rem 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #212121;
`
const CardTitleCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  padding-bottom: 2rem;
`
const CardTitle = styled.li`
  font-size: 1.2rem;
  margin-bottom: .5rem;
  font-family: 'Roboto', sans-serif;
`
const CardPrice = styled.li`
  color: ${props => props.theme.main.primaryColor};
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: .5rem;
`
const CardOperation = styled.span`
  font-weight: bold;
  text-transform: capitalize;
  font-family: 'Roboto', sans-serif;
`
const CardCharacteristics = styled.ul`
  //list-style: none;
  padding: 1rem;
  padding-top: 2rem;
  color: #919191;
`

const CharItem = styled.li`
  margin-bottom: .5rem;
`
const Divider = styled.span`
  height: 1px;
  width: 100%;
  background-color: #EBEBEB;
`

export default ({
  _id,
  mainImage,
  title,
  value,
  code,
  ubication,
  characteristics,
  operation,
  currency
})=> {
  const builderId = useContext(context).builderId;
  return(
    <Link to={`/property?builderId=${builderId}&propertyId=${_id}`} title="Ver propiedad">
    <CardCont>
      <CardImage src={mainImage} />
      <CardInfo>
        <CardTitleCont>
          <CardTitle>{truncate(title, 30)}</CardTitle>
          {currency} {currency !== "UF" && "$"}{priceFormat(value)}
          <li>
            <CardOperation>{operation.toLowerCase()} - cod {code}</CardOperation>
          </li>
        </CardTitleCont>
        <Divider />
        <CardCharacteristics>
          <CharItem>
            <img src="/site.svg" />
            <span style={{ marginLeft: ".5rem" }}>{truncate(ubication.address, 30)}</span>
          </CharItem>
          {
            characteristics.filter(char => (
              char.name === "Superficie total" ||
              char.name === "Superficie útil" ||
              char.name === "Habitaciones" ||
              char.name === "Baños" ||
              char.name === "Estacionamientos"

            ) ).map((char, index) => (
              <CharItem key={index}>
                {
                  char.name === "Superficie total" && <img src="/surface.svg" /> ||
                  char.name === "Superficie útil" && <img src="/surface.svg" />  ||
                  char.name === "Habitaciones" && <img src="/rooms.svg" /> ||
                  char.name === "Baños" && <img src="/bath.svg" /> ||
                  char.name === "Estacionamientos" && <img src="/parking.svg" />
                }
                <span style={{ marginLeft: ".5rem" }}>{char.name} {char.value} {char.name === "Superficie total" && "mt2" || char.name === "Superficie útil" && "mt2"}</span>
              </CharItem>
            ))
          }
        </CardCharacteristics>
      </CardInfo>
    </CardCont>
    </Link>
  )
}