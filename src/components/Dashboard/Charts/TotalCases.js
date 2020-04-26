import React from 'react';
import LineChart from './LineChart';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

function TotalCases({ data }) {
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
    <LineChart data={processedData} labelX="Día" labelY="Casos"></LineChart>
  );
}

TotalCases.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TotalCases;
