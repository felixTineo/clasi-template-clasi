import React, { useMemo, useCallback, useReducer, useLayoutEffect } from 'react';
import Context from '../_context';
import data from '../_context/state';
import styled, { ThemeProvider } from 'styled-components';
import Header from './header';
import Footer from './footer';
import LoaderScreen from '../_components/LoaderScreen';
import { useQueryParam } from "gatsby-query-params";
import { makePropertiesFilters } from '../_util'
import FormatData from '../_context/data.class';
import noData from '../_context/state';

const Layout = styled.div`
  overflow: hidden;
`

const Body = styled.div`
  position: relative;
  //padding-top: 67px;
  min-height: 100vh;
  @media(min-width: 768px){
    //padding-top: 89px;
  }
`

export default ({ children })=> {
  const builderId = useQueryParam('id');
  const builderUrl = useMemo(()=> `https://api.clasihome.com/rest/builders?builderId=${builderId}`, [builderId]);
  const [query, setQuery] = useReducer((current, next) => ({ ...current, ...next }),{ loading: false, data: noData, error: false });

  const getInitialData = useCallback(async()=>{
    try{
      setQuery({ loading: true });
      const builderData = await fetch(builderUrl);
      const builderResult = await builderData.json();
      console.log("INITIAL DATA", builderResult);
      const paginateProperties = await FormatData.paginateProperties({ id: builderResult.office });
      builderResult.home.properties.items = paginateProperties.properties;
      const data = new FormatData(builderResult);
      console.log("FINAL DATA", data);
      setQuery({ loading: false, data })
    }catch(e){
      console.log(e);
      setQuery({ loading: false, error: true });
    }
  },[builderId]);

  useLayoutEffect(()=> {
    if(builderId){
      getInitialData();
    }
  },[builderId]);

  if(query.loading) return <LoaderScreen />
  if(query.error) return <p>error de conexión</p>
  if(!query.data) return null;

  return(
    <Context.Provider
      value={query.data}
    >
      <ThemeProvider
        theme={query.data}
      >
        <Layout>
          <Header />
          <Body>
            {children}
          </Body>
          <Footer />
        </Layout>
      </ThemeProvider>
    </Context.Provider>
  )
}