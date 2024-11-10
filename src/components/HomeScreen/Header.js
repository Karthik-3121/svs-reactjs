import React from 'react';

import './Header.css';
import elsiverLogo from './els-logo-light.svg';

const Header = () => {
  return (
    <div className="header-panel col-md-12">
      <nav className="navbar py-3">
        <img
          src={elsiverLogo}
          alt="Elsevier Logo"
          height={50}
          className="els-logo"
        />
        <ul className="nav ml-auto">
          <li className="nav-item">
            <a href="https://www.scopus.com/" target="_blank" className="nav-link">
              Visit Scopus
            </a>
          </li>
          <li className="nav-item">
            <a href="https://service.elsevier.com/app/overview/scopus/" target="_blank" className="nav-link">
              Support Center
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
