import React, { useState } from 'react';
import LineChart from './LineChart';
import ScaleSelector from '../../ScaleSelector';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

function TotalActive({ data }) {
  const [scale, setScale] = useState('linear');

  const processedData = [
    {
      id: 'totalActive',
      color: '#276749',
      data: data
        .map((row) => {
          let result =
            row.data.today_confirmed -
            row.data.today_deaths -
            row.data.today_recovered;

          if (result <= 0) {
            result = scale === 'log' ? 1 : 0.00001;
          }

          return {
            x: format(Date.parse(row.date), 'dd/MM'),
            y: result,
          };
        })
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
        labelY="Casos Activos"
        yValues={[10, 100, 1000]}
        logBase={5}
      ></LineChart>
    </>
  );
}

TotalActive.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TotalActive;
