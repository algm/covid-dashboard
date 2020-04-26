import React from 'react';
import { FiGithub } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-green-800 text-white p-3 sticky bottom-0 flex items-center justify-between content-center z-40">
      <div>
        Developer: <a href="https://antoniogazquez.me">Antonio Gázquez</a>
      </div>
      <div>
        <a
          href="https://github.com/algm/covid-dashboard"
          className="inline-block flex items-center content-center"
        >
          <FiGithub></FiGithub>{' '}
          <span className="ml-2 inline-block">Repository</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
