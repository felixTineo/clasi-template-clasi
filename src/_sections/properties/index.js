import React, { useState, useContext, useCallback, useLayoutEffect, useEffect, Fragment } from 'react';
import context from '../../_context';
import Data from '../../_context/data.class';
import Hero from './hero';
import Properties from './properties';
import Review from './reviews';

export default ({ locationState })=> {
  const [paginateProperties, setPaginateProperties] = useState({});

  useLayoutEffect(()=> {
    if(locationState.paginateProperties){
      console.log("DESDE EL HOME", locationState.paginateProperties);
    } else{
      console.log("ACTUALIZADO")
    }
  },[locationState]);

  return(
    <Fragment>
      <Hero
        search={locationState.search}
      />
      <Properties
        paginateProperties={locationState.paginateProperties}
      />
      <Review />
    </Fragment>
  )
}