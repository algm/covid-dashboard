import React from 'react';
import PropTypes from 'prop-types';

function Widget({ children, className, title }) {
  return (
    <div className={`p-3 ${className}`}>
      <div className="border border-solid shadow-sm border-gray-400 h-xl bg-white">
        <h2 className="text-center font-bold pt-3 text-lg">{title}</h2>

        {children}
      </div>
    </div>
  );
}

Widget.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Widget;
