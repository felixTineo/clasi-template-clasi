import React from 'react';
import styled from 'styled-components';
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { Button } from '../buttons';
import { EnvironmentOutlined } from '@ant-design/icons';

const BannerCont = styled.div`
  margin-top: 2rem;
  padding: 4rem 2rem;
  background-color: ${props => props.theme.main.primaryColor};
  background-image: ${props => props.image ? `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(${props.image})` : ""};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Title = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-size: 1.5rem;
  @media(min-width: 768px){
    text-align: left;
  }
`
const ImageCont = styled.div`
  font-size: 2rem;
  color: #fff;
  text-align: center;
`

export default ({ title, image, onClick, buttonText, icon }) => {

  return(
    <BannerCont image={image}>
      <Row align="center">
        <Visible xs>
          <Col xs={12}>
            <ImageCont>
              <EnvironmentOutlined />
            </ImageCont>
          </Col>
        </Visible>
        <Col xs={12} md={9}>
          <Title>
            <Hidden xs>
              <EnvironmentOutlined style={{ marginRight: "1rem" }} />
            </Hidden>
            {title}
          </Title>
        </Col>
        <Col xs={12} md={3}>
          <Button onClick={onClick} block>
            {buttonText}
          </Button>
        </Col>        
      </Row>
    </BannerCont>
  )
}