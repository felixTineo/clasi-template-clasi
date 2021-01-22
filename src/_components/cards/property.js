import React, { useContext } from 'react';
import context from '../../_context';
import Link from '../link';
import styled from 'styled-components';
import { truncate } from '../../_util';
import { useGetIndicators } from '../../_hooks';

const CardCont = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #EBEBEB;
  height: 640px;
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
  position: relative;
`
const Commune = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  padding: .5rem;
  color: #fff;
  background-color: #000;
  margin: 0;
  text-transform: uppercase;
`
const CardInfo = styled.div`
  padding: 1rem 1rem 1.5rem 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: top;
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
`
const CardCharacteristics = styled.ul`
  //list-style: none;
  padding: 1rem;
  padding-top: 2rem;
  color: #919191;
`

const CharItem = styled.li`
  margin-bottom: .5rem;
  display: flex;
  align-items: center;
  span{
    margin-left: .5rem;
  }
  img{
    width: 20px;
  }
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
  const { loading, error, data } = useGetIndicators();
  return(
    <Link to={`/property?builderId=${builderId}&propertyId=${_id}`} title="Ver propiedad">
      {console.log("CHARACTERISTICS", characteristics)}
    <CardCont>
      <CardImage src={mainImage}>
        <Commune>
          {ubication.commune}
        </Commune>
      </CardImage>
      <CardInfo>
        {console.log("INDICADORES",data)}
        <CardTitleCont>
          <CardTitle>{truncate(title, 50)}</CardTitle>
          <CardPrice>{"UF "}{ currency === "UF" ? " " + value.toLocaleString() : data && (value / data.uf).toLocaleString()}</CardPrice>
          <CardPrice>{"CLP $"}{ currency === "CLP" ? value.toLocaleString() : data && (value * data.uf).toLocaleString()}</CardPrice>
          <li>
            <CardOperation>{operation.toLowerCase()} - </CardOperation>
            <span>cod {code}</span>
          </li>
        </CardTitleCont>
        <Divider />
        <CardCharacteristics>
          {
            characteristics.filter(char => (
              char.name === "Superficie total" ||
              char.name === "Superficie útil" ||
              char.name === "Habitaciones" ||
              char.name === "Baños"

            ) ).map((char, index) => (
              <CharItem key={index}>
                {
                  char.name === "Superficie total" && <img src="/icons/surface.svg" /> ||
                  char.name === "Superficie útil" && <img src="/icons/surface.svg" />  ||
                  char.name === "Habitaciones" && <img src="/icons/rooms.svg" /> ||
                  char.name === "Baños" && <img src="/icons/bath.svg" />
                }
                <span>{char.name} {char.value} {char.name === "Superficie total" && "mt2" || char.name === "Superficie útil" && "mt2"}</span>
              </CharItem>
            ))
          }
        </CardCharacteristics>
      </CardInfo>
    </CardCont>
    </Link>
  )
}