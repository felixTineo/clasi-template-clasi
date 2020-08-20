import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Row, Col, Container, Hidden } from 'react-grid-system';
import { Button } from '../../_components/buttons';
import { ServiceCarousel } from '../../_components/carousels';

const MainCont = styled.section`  
  position: relative;
`
const HeroInfoCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  min-height: 50vh;
  color: #ffffff;
`
const DescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  height: 100%;
`
const Title = styled.h2`
  font-size: 40px;
`
const Description = styled.p`
  margin: 4rem 0;
`
const HeroImage = styled.img`
  width: 50vw;
  height: 100%;
  object-fit: cover;
  object-fit: center;
`
const TitleService = styled(Title)`
  color: ${props => props.theme.main.primaryColor};
  padding-top: 4rem;
`
const SubTitleService = styled(Description)`
  font-weight: bold;
  margin: 4rem 0 0;
`
const TitleQuoteCont = styled.div`
  padding-top: 4rem;
`
const SvgCont = styled.svg`
  margin: 2rem 0;
  fill: ${props => props.theme.main.primaryColor};
`
const QuoteCarouselCont = styled.div`
  margin-top: 4rem;
`
const CarouselCont = styled.div`
  position: relative;
`


export default ()=> {
  const state = useContext(Context).home;
  return(
    <MainCont>
      <HeroInfoCont>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <DescriptionCont>
                <Title>
                  {state.about.banner.title}
                </Title>
                <Description>
                  {state.about.banner.subTitle}
                </Description>
                <Button block>
                  {state.about.banner.buttonText}
                </Button>
              </DescriptionCont>
            </Col>
            <Hidden xs>
              <Col md={6}>
                <HeroImage src={state.about.banner.image} />
              </Col>
            </Hidden>
          </Row>
        </Container>
      </HeroInfoCont>
      <Container>
        <Row gutterWidth={128}>
          <Col xs={12} md={6}>
            <TitleService>Ofrecemos un servicio ajustado a las necesidades de cada cliente</TitleService>
            <SubTitleService>Estas son algunas de las cosas que podemos hacer por vos:</SubTitleService>
            <CarouselCont>
              <ServiceCarousel />
            </CarouselCont>
          </Col>
          <Col xs={12} md={6}>
            <TitleQuoteCont>
              <SvgCont width="84" height="101" viewBox="0 0 84 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M56 48.3737L56 0H84L84 48.3737L72.6923 101H58.1538L66.2308 48.3737H56ZM0 48.3737L0 0L28 0L28 48.3737L16.6923 101H2.15385L10.2308 48.3737H0Z"/>
              </SvgCont>
            </TitleQuoteCont>
            <QuoteCarouselCont>

            </QuoteCarouselCont>
          </Col>          
        </Row>
      </Container>
    </MainCont>
  )
}