import React, { useState } from 'react';
import LineChart from './LineChart';
import ScaleSelector from '../../ScaleSelector';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

function TotalCases({ data }) {
  const [scale, setScale] = useState('log');

  const processedData = [
    {
      id: 'totalCases',
      color: '#276749',
      data: data
        .map((row) => ({
          x: format(Date.parse(row.date), 'dd/MM'),
          y: row.data.today_confirmed,
        }))
        .filter(({ y }) => !!y),
    },
  ];

  return (
    <>
      <ScaleSelector selected={scale} onChange={setScale}></ScaleSelector>
      <LineChart
        data={processedData}
        labelX="Día"
        labelY="Casos"
        yScale={scale}
      ></LineChart>
    </>
  );
}

TotalCases.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TotalCases;
