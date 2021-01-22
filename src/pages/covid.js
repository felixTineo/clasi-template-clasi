import React from 'react';
import Layout from '../_layout';
import Hero from '../_sections/covid/hero';
import History from '../_sections/covid/history';
import Properties from '../_sections/home/properties';
import Ubication from '../_sections/covid/ubication';
import { graphql } from 'gatsby';

export default ({ data })=> (
  <Layout data={JSON.parse(data.initial.data)}>
    <Hero />
    <History />
    <Properties />
    <Ubication />
  </Layout>
);

export const query = graphql`
query{
  initial{
    data
  }
}
`