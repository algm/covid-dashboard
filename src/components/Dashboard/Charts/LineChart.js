import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveLineCanvas } from '@nivo/line';

function LineChart({
  data,
  labelX,
  labelY,
  yScale,
  yValues,
  logBase,
  ...props
}) {
  let yScaleType = yScale || 'linear';

  let computedYScale = {
    type: 'linear',
    max: 'auto',
    min: 0,
    stacked: true,
    reverse: false,
  };

  let tickValues = undefined;

  if (yScaleType === 'log') {
    computedYScale = {
      type: 'log',
      base: logBase || 10,
      max: 'auto',
      stacked: true,
      reverse: false,
    };

    tickValues = yValues || [10, 100, 1000, 10000];
  }

  return (
    <ResponsiveLineCanvas
      data={data}
      colors={{ scheme: 'dark2' }}
      xScale={{
        type: 'time',
        format: '%d/%m',
        precision: 'day',
      }}
      margin={{ top: 50, bottom: 120, left: 50, right: 50 }}
      xFormat="time:%d/%m"
      yScale={computedYScale}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: labelX,
        legendOffset: 50,
        legendPosition: 'middle',
        format: '%d/%m',
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
        tickValues,
      }}
      enableGridX={false}
      curve="monotoneX"
      pointSize={3}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel=""
      pointLabelYOffset={-12}
      useMesh={true}
      {...props}
    />
  );
}

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
  labelX: PropTypes.string.isRequired,
  labelY: PropTypes.string.isRequired,
  yScale: PropTypes.string,
  yValues: PropTypes.array,
  logBase: PropTypes.number,
};

export default LineChart;
