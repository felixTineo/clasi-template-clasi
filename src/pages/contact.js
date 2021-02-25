import React from 'react';
import Layout from '../_layout';
import Hero from '../_sections/contact/hero';
import Contact from '../_sections/contact';
import Ubication from '../_sections/about/ubication';
import { graphql } from 'gatsby';

export default ({ data })=> {

  return(
    <Layout data={JSON.parse(data.initial.data)}>
      <Hero />
      <Contact />
      <Ubication />
    </Layout>
  )
}

export const query = graphql`
query{
  initial{
    data
  }
}
`