import React from 'react';
import Context from '../_context';
import data from '../_context/state';
import styled, { ThemeProvider } from 'styled-components';
import Header from './header';
import Footer from './footer';
import { useLayout } from '../_hooks';
import LoaderScreen from '../_components/LoaderScreen';
import { Helmet } from "react-helmet"

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

export default ({ children, data })=> {

  /*const { loading, data, error } = useLayout();

  if(loading) return <LoaderScreen />
  if(error) return <p>error de conexión</p>*/

  return(
    <Context.Provider value={data}>
      <ThemeProvider theme={data}>
        <Layout>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Tenemos excelentes propiedades pensadas para ti." />
            <title>Realty Brokers | Chile</title>
            <link rel="canonical" href="http://clasihome.com" />
            <meta name="og:url" content="http://clasihome.com" />
            <meta name="og:title" content="Realty Brokers | Chile" />
            <meta name="og:description" content="Tenemos excelentes propiedades pensadas para ti." />
            {/*<meta name="og:image" content="http://propiedadesmyc.cl/og-meta.jpg" />*/}
            <meta name="og:type" content="website" />          
            {/*<script type="text/javascript" async src="https://s.cliengo.com/weboptimizer/5fc654eafd9efe002a1607d6/5fc654ebfd9efe002a1607d9.js"></script>*/}
          </Helmet>              
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