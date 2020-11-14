import React, { useState } from 'react';
import Layout from '../_layout/index';
import Properties from '../_sections/properties';

export default ({ location })=> {
  return(
    <Layout>
      <Properties location={location} />
    </Layout>
  )
}