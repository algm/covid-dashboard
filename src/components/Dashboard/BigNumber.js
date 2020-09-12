import React from 'react';
import PropTypes from 'prop-types';
import AnimatedNumber from 'animated-number-react';

function BigNumber({ title, value, delta }) {
  let deltaChar = '+';

  if (delta < 0) {
    deltaChar = '';
  }

  return (
    <div className="text-center">
      <div className="font-bold">{title}</div>
      <AnimatedNumber
        value={value}
        formatValue={(val) => val.toFixed(0)}
        className="text-2xl font-bold"
      ></AnimatedNumber>
      <div className="text-gray-600">
        {deltaChar}
        {delta}
      </div>
    </div>
  );
}

BigNumber.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  delta: PropTypes.number,
};

export default BigNumber;
