import React, { useState } from 'react';
import LineChart from './LineChart';
import ScaleSelector from '../../ScaleSelector';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

function TotalHospitalised({ data }) {
  const [scale, setScale] = useState('log');

  const processedData = [
    {
      id: 'totalHospitalised',
      color: '#276749',
      data: data
        .map((row) => ({
          x: format(Date.parse(row.date), 'dd/MM'),
          y: row.data.today_total_hospitalised_patients,
        }))
        .filter(({ y }) => !!y),
    },
  ];

  return (
    <>
      <ScaleSelector selected={scale} onChange={setScale}></ScaleSelector>
      <LineChart
        data={processedData}
        yScale={scale}
        labelX="Día"
        labelY="Hospitalizaciones"
        yValues={[10, 100, 1000]}
        logBase={5}
      ></LineChart>
    </>
  );
}

TotalHospitalised.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TotalHospitalised;
