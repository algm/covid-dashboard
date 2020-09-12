import React from 'react';
import Widget from './Dashboard/Widget';
import LastNumbers from './Dashboard/LastNumbers';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import TotalCases from './Dashboard/Charts/TotalCases';
import TotalDeath from './Dashboard/Charts/TotalDeaths';
import TotalRecoveries from './Dashboard/Charts/TotalRecoveries';
import TotalHospitalised from './Dashboard/Charts/TotalHospitalised';
import TotalActive from './Dashboard/Charts/TotalActive';
import TotalIc from './Dashboard/Charts/TotalIc';
import CurrentSituation from './Dashboard/Charts/CurrentSituation';

function Dashboard({ data }) {
  return (
    <div className="relative flex flex-col items-stretch content-center justify-stretch w-full z-10">
      <Header lastUpdate={data.lastUpdate}></Header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-gray-100 flex-1">
        <LastNumbers
          className="col-span-1 md:col-span-2 xl:col-span-3"
          data={data.data}
        ></LastNumbers>
        <Widget
          title="Resumen de situación"
          className="row-span-2 col-span-1 md:col-span-2 xl:col-span-3"
        >
          <CurrentSituation data={data.data}></CurrentSituation>
        </Widget>
        <Widget title="Casos confirmados acumulados">
          <TotalCases data={data.data}></TotalCases>
        </Widget>
        <Widget title="Muertes acumuladas">
          <TotalDeath data={data.data}></TotalDeath>
        </Widget>
        <Widget title="Altas acumuladas">
          <TotalRecoveries data={data.data}></TotalRecoveries>
        </Widget>
        <Widget title="Pacientes hospitalizados acumulados">
          <TotalHospitalised data={data.data}></TotalHospitalised>
        </Widget>
        <Widget title="Pacientes en UCI acumulados">
          <TotalIc data={data.data}></TotalIc>
        </Widget>
        <Widget title="Casos confirmados activos">
          <TotalActive data={data.data}></TotalActive>
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
