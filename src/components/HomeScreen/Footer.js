import React from 'react';

import './Header.css';
import elsLogo from './els-logo-dark.svg';
import relxLogo from './relx.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer-panel col-md-12">
                <nav className="navbar py-3">
                    <img
                        src={elsLogo}
                        alt="Elsevier Logo"
                        height={36}
                        width={130}
                        className="els-logo-footer"
                    />
                    <img
                        src={relxLogo}
                        alt="Elsevier Logo"
                        height={36}
                        width={100}
                        className="relx-logo"
                    />

                    <ul className="footer-links">
                        <li>
                            <a className="external-link" href="https://www.elsevier.com/legal/elsevier-website-terms-and-conditions" rel="noopener" target="_blank">
                                <span>
                                    <span>Terms &amp; conditions</span>
                                    <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" fillRule="evenodd" d="M5.438 6.75h10.7L4.983 17.906l1.326 1.328 11.13-11.13V18.75h1.875V4.875H5.438V6.75Z" clipRule="evenodd"></path></svg>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className="external-link" href="https://www.elsevier.com/legal/privacy-policy" rel="noopener" target="_blank">
                                <span>
                                    <span>Privacy policy</span>
                                    <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" fillRule="evenodd" d="M5.438 6.75h10.7L4.983 17.906l1.326 1.328 11.13-11.13V18.75h1.875V4.875H5.438V6.75Z" clipRule="evenodd"></path></svg>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className="external-link" href="https://www.elsevier.com/legal/cookienotice" rel="noopener" target="_blank">
                                <span>
                                    <span>Cookie policy</span>
                                    <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" fillRule="evenodd" d="M5.438 6.75h10.7L4.983 17.906l1.326 1.328 11.13-11.13V18.75h1.875V4.875H5.438V6.75Z" clipRule="evenodd"></path></svg>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className="external-link" href="https://service.elsevier.com/app/overview/scopus/" rel="noopener" target="_blank">
                                <span>
                                    <span>Support &amp; contact</span>
                                    <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" fillRule="evenodd" d="M5.438 6.75h10.7L4.983 17.906l1.326 1.328 11.13-11.13V18.75h1.875V4.875H5.438V6.75Z" clipRule="evenodd"></path></svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};
export default Footer;
