import React from 'react';
import Widget from './Dashboard/Widget';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import TotalCases from './Dashboard/Charts/TotalCases';
import TotalDeath from './Dashboard/Charts/TotalDeaths';

function Dashboard({ data }) {
  return (
    <div className="relative flex flex-col items-stretch content-center justify-stretch w-full z-10">
      <Header lastUpdate={data.lastUpdate}></Header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-gray-100 flex-1">
        <Widget title="Casos acumulados">
          <TotalCases data={data.data}></TotalCases>
        </Widget>
        <Widget title="Muertes acumuladas">
          <TotalDeath data={data.data}></TotalDeath>
        </Widget>
      </div>
      <Footer></Footer>
    </div>
  );
}

Dashboard.propTypes = {
  data: PropTypes.object,
};

export default Dashboard;
