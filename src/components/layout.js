import PropTypes from 'prop-types';
import React from 'react';

function Layout({ children }) {
  return (
    <div className="w-screen h-screen flex min-h-screen font-sans text-gray-900 content-center items-stretch justify-stretch">
      <main className="flex w-full items-stretch content-stretch justify-stretch">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
