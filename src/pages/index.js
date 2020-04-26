/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Dashboard from '../components/Dashboard';
import Layout from '../components/layout';
import SEO from '../components/seo';
import apiData from '../../data/data.json';

function IndexPage() {
  return (
    <Layout title="COVID-19 Jaén">
      <SEO
        keywords={[
          'coronavirus',
          'jaén',
          'covid-19',
          'españa',
          'andalucía',
          'datos',
          'cuadro de mandos',
          'dashboard',
          'gráficos',
        ]}
        title="COVID-19 Jaén"
      />
      <div className="flex-1 border-1 border-red-500">
        <Dashboard data={apiData}></Dashboard>
      </div>
    </Layout>
  );
}

export default IndexPage;
