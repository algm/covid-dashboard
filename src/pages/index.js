/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <Layout title="COVID-19 España">
      <SEO
        keywords={['utils', 'wordcount', 'po', 'translations']}
        title="COVID-19 España"
      />
      <div className="flex-1 border-1 border-red-500">Esto es mi dashboard</div>
    </Layout>
  );
}

export default IndexPage;
