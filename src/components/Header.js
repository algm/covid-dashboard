import React from 'react';
import PropTypes from 'prop-types';

function Header({ lastUpdate }) {
  return (
    <header className="sticky top-0 z-40">
      <div className="p-3 bg-green-800 text-white flex items-center content-center justify-between">
        <h1 className="font-bold text-lg">Datos COVID-19 provincia de Jaén</h1>
        <div>Última actualización: {lastUpdate}</div>
      </div>
    </header>
  );
}

Header.propTypes = {
  lastUpdate: PropTypes.string.isRequired,
};

export default Header;
