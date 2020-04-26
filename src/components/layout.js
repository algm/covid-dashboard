import PropTypes from 'prop-types';
import React from 'react';

function Layout({ children }) {
  return (
    <div className="h-screen flex min-h-screen font-sans text-gray-900 content-center items-stretch justify-center">
      <main className="flex flex-1 items-stretch content-center justify-center">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
