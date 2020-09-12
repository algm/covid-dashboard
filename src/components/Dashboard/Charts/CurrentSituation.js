import React from 'react';
import LineChart from './LineChart';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

function CurrentSituation({ data }) {
  const processedData = [
    {
      id: 'Muertes',
      color: '#276749',
      data: data.map((row) => ({
        x: format(Date.parse(row.date), 'dd/MM'),
        y: row.data.today_deaths,
      })),
    },
    {
      id: 'Altas',
      color: '#276749',
      data: data.map((row) => ({
        x: format(Date.parse(row.date), 'dd/MM'),
        y: row.data.today_recovered,
      })),
    },
    {
      id: 'Casos activos',
      color: '#276749',
      data: data.map((row) => {
        let value =
          row.data.today_confirmed -
          row.data.today_deaths -
          row.data.today_recovered;

        if (value < 0) {
          value = 0;
        }

        return {
          x: format(Date.parse(row.date), 'dd/MM'),
          y: value,
        };
      }),
    },
  ];

  return (
    <>
      <LineChart
        data={processedData}
        yScale="Linear"
        labelX="Día"
        labelY="Resumen de situación"
        yValues={[0, 10, 100, 1000]}
        logBase={10}
        enableArea={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        areaOpacity={0.5}
        margin={{ top: 50, bottom: 120, left: 50, right: 150 }}
      ></LineChart>
    </>
  );
}

CurrentSituation.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CurrentSituation;
