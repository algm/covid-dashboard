import React from 'react';
import PropTypes from 'prop-types';

function ScaleSelector({ selected, onChange, className }) {
  const linearClass =
    selected === 'linear'
      ? 'font-semibold bg-green-200 text-green-800 border-solid border border-green-300'
      : 'text-gray-600';
  const logClass =
    selected === 'log'
      ? 'font-semibold bg-green-200 text-green-800 border-solid border border-green-300'
      : 'text-gray-600';

  return (
    <nav
      className={`flex space-x-3 items-center justify-center text-sm ${className}`}
    >
      <span className="font-semibold inline-block">Escala</span>
      <a
        href="#"
        className={`inline-block px-1 rounded-lg ${linearClass}`}
        onClick={(e) => {
          e.preventDefault();
          if (onChange) {
            onChange('linear');
          }
        }}
      >
        Lineal
      </a>
      <a
        href="#"
        className={`inline-block rounded-lg px-1 ${logClass}`}
        onClick={(e) => {
          e.preventDefault();
          if (onChange) {
            onChange('log');
          }
        }}
      >
        Logarítmica
      </a>
    </nav>
  );
}

ScaleSelector.propTypes = {
  selected: PropTypes.oneOf(['linear', 'log']),
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default ScaleSelector;
