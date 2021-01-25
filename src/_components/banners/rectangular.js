import React from 'react';
import styled from 'styled-components';
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { Button } from '../buttons';

const BannerCont = styled.div`
  margin-top: 2rem;
  padding: 4rem 2rem;
  background-color: #000;
  background-image: ${props => props.image ? `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(${props.image})` : ""};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Title = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media(min-width: 768px){
    text-align: left;
  }
`
const ImageCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const CustomButton = styled(Button)`
  background-color: hsl(40, 4%, 85%);
  border-color: #DAD9D7;
  color: #000;
  &:hover{
    background-color: hsl(40, 4%, 75%);
    color: #000;
  }
  &:active{
    background-color: hsl(40, 4%, 85%);
    color: #000;
  }
`

export default ({ title, image, onClick, buttonText, icon }) => {

  return(
    <BannerCont image={image}>
      <Row align="center">
        <Visible xs>
          <Col xs={12}>
            <ImageCont>
              <img src={icon} alt={title} style={{ marginRight: ".5rem" }} />
            </ImageCont>
          </Col>
        </Visible>
        <Col xs={12} md={9}>
          <Title>
            <Hidden xs>
              <img src={icon} alt={title} style={{ marginRight: ".5rem" }} />
            </Hidden>
            {title}
          </Title>
        </Col>
        <Col xs={12} md={3}>
          <CustomButton onClick={onClick} block primary>
            {buttonText}
          </CustomButton>
        </Col>        
      </Row>
    </BannerCont>
  )
}