import React, { useState, useContext, useCallback, useLayoutEffect, useEffect, Fragment } from 'react';
import context from '../../_context';
import Data from '../../_context/data.class';
import Hero from './hero';
import Properties from './properties';
import Review from './reviews';
import { getSearchParams } from "gatsby-query-params";

export default ({ locationState })=> {
  const [loading, setLoading] = useState(false);
  const [paginateProperties, setPaginateProperties] = useState(null);
  const params = getSearchParams();

  const getProperties = useCallback(async(filters) => {
    try{
      setLoading(true);
      const paginateProperties = await Data.paginateProperties({ ...params });
      console.log("PAGINATE GET PROPERTIES", paginateProperties);
      setPaginateProperties(paginateProperties);      
      setLoading(false);
    }catch(e){
      console.log(e);
      setLoading(false);
    }
  },[params]);

  useLayoutEffect(()=> {
    getProperties(params);
  },[params]);

  if(!paginateProperties) return <p />

  return(
    <Fragment>
      <Hero />
      <Properties
        paginateProperties={paginateProperties}
        onPaginate={getProperties}
        loading={loading}
      />
      <Review />
    </Fragment>
  )
}