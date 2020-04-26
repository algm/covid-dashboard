import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveLine } from '@nivo/line';

function LineChart({ data, labelX, labelY }) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{
        type: 'time',
        format: '%d/%m',
        precision: 'day',
      }}
      xFormat="time:%d/%m"
      yScale={{
        type: 'log',
        base: 10,
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -60,
        legend: labelX,
        legendOffset: 36,
        legendPosition: 'middle',
        format: '%b %d',
        tickValues: 'every 7 days',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: labelY,
        legendOffset: -40,
        legendPosition: 'middle',
        tickValues: [10, 100, 1000, 10000],
      }}
      enableGridX={false}
      curve="natural"
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel=""
      pointLabelYOffset={-12}
      useMesh={true}
    />
  );
}

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
  labelX: PropTypes.string.isRequired,
  labelY: PropTypes.string.isRequired,
};

export default LineChart;
