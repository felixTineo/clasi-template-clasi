import React, { useState } from 'react';
import Layout from '../_layout/index';
import Properties from '../_sections/properties';

export default ({ location })=> {
  return(
    <Layout>
      {console.log("LOCATION AAAAA", location)}
      <Properties locationState={location.state} />
    </Layout>
  )
}