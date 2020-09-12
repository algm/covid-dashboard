import React from 'react';
import PropTypes from 'prop-types';
import BigNumber from './BigNumber';

function LastNumbers({ data, className }) {
  const lastRow = data[data.length - 1].data;

  console.log({ lastRow });

  return (
    <div className={`p-3 ${className}`}>
      <div className="border border-solid shadow-sm border-gray-400 bg-white">
        <div className="flex flex-row space-x-4 px-3 items-center justify-center mb-2">
          <BigNumber
            title="Confirmados PCR"
            z
            value={lastRow.today_confirmed}
            delta={lastRow.today_new_confirmed}
          ></BigNumber>
          <BigNumber
            title="Muertes"
            value={lastRow.today_deaths}
            delta={lastRow.today_new_deaths}
          ></BigNumber>
          <BigNumber
            title="Altas"
            value={lastRow.today_recovered}
            delta={lastRow.today_new_recovered}
          ></BigNumber>
          <BigNumber
            title="Hospitalizaciones"
            value={lastRow.today_total_hospitalised_patients}
            delta={lastRow.today_new_total_hospitalised_patients}
          ></BigNumber>
          <BigNumber
            title="UCI"
            value={lastRow.today_intensive_care}
            delta={lastRow.today_new_intensive_care}
          ></BigNumber>
        </div>
      </div>
    </div>
  );
}

LastNumbers.propTypes = {
  data: PropTypes.array.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default LastNumbers;
