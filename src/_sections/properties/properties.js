import React, { useContext, useEffect, useCallback, Fragment } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { PropertyCard as Card } from '../../_components/cards';
import ReactPaginate from 'react-paginate';
import { FrownOutlined, LeftOutlined, RightOutlined, LoadingOutlined } from '@ant-design/icons';
import { navigate } from 'gatsby';
import Data from '../../_context/data.class';
import { getSearchParams } from 'gatsby-query-params';

const NavPaginate = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  .paginateCont{
    list-style: none;
    display: flex;
    align-items: center;
  }
  .pagination-page{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #919191;
    margin: 0 .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 250ms ease;
    &:hover{
      color: #fff;
      background-color: ${props => props.theme.main.primaryColor};
    }
  }
  .active-pagination-page{
    color: #fff;
    background-color: ${props => props.theme.main.primaryColor};
  }
  .back-button-paginate{
    color: ${props => props.theme.main.primaryColor};
    cursor: pointer;
  }
  .next-button-paginate{
    color: ${props => props.theme.main.primaryColor};
    cursor: pointer;
  }
  .control-disabled{
    color: #919191;
  }
`
const NavArrow = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 250ms ease;
`
const NavNumber = styled(NavArrow)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #919191;
  margin: 0 1rem;
  &:hover{
    color: #fff;
    background-color: ${props => props.theme.main.primaryColor};
  }
`
const SvgCont = styled.svg`
  fill: #919191;
  transition: 250ms ease;
  ${NavArrow}:hover &{
    fill: ${props => props.theme.main.primaryColor};
  }
`
const StyledRightOutlined = styled(RightOutlined)`
  //color: ${props => props.theme.main.primaryColor};
`
const StyledLeftOutlined = styled(LeftOutlined)`
  //color: ${props => props.theme.main.primaryColor};
`

const NoDataCont = styled.div`
  height: calc(50vh - 108px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LoadingCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: ${props => props.theme.main.primaryColor};
  font-size: 3rem;
  min-height: calc(100vh - 108px);
`

export default ({ paginateProperties, onPaginate, loading })=> {
  const params = getSearchParams();

  const handlePaginate = useCallback(val => {
    const { selected } = val;
    const nextParams = Data.makeFilters({ ...params, page: selected });
    navigate(`/properties/?${nextParams}`);
  },[params])

  return(
    <Container>
      <div style={{ paddingTop: '5rem' }}>
        <Row>
        {
            loading
            ?(
              <Col xs={12}>
                <LoadingCont>
                  <LoadingOutlined />
                </LoadingCont>                  
              </Col>
            )
            :(
              <Fragment>
                {
                  paginateProperties.properties.map(p => (
                    <Col key={p.mainImage} xs={12} md={4} style={{ margin: "1rem 0" }}>
                      <Card {...p} />
                    </Col>                
                  ))
                }                
                {
                  paginateProperties.totalRegistersQuery > 0 && (
                  <Col xs={12}>
                    <NavPaginate>
                      <ReactPaginate
                        pageCount={paginateProperties.totalRegistersQuery / 6}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={4}
                        containerClassName="paginateCont"
                        activeClassName="pagination-page-active"
                        pageClassName="pagination-page"
                        previousLabel={<StyledLeftOutlined />}
                        previousClassName="back-button-paginate"
                        nextLabel={<StyledRightOutlined />}
                        nextClassName="next-button-paginate"
                        disabledClassName="control-disabled"
                        activeClassName="active-pagination-page"
                        onPageChange={handlePaginate}
                        initialPage={parseInt(paginateProperties.page, 10)}
                        disableInitialCallback={true}
                      />
                    </NavPaginate>
                  </Col>
                  )
                }
                {
                  paginateProperties.totalRegistersQuery === 0 && (
                    <Col xs={12}>
                      <NoDataCont>
                        <FrownOutlined style={{ fontSize: 36, color: "#979797" }} />
                        <p>No se encontron propiedades</p>
                      </NoDataCont>
                    </Col>                
                  )
                }                
              </Fragment>
            )
          }                  
        </Row>
      </div>
    </Container>
  )
}