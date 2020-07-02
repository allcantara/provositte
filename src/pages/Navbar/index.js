import React from "react";
import logotipo from "../../assets/img/logotipo.png";

import { Navbar, Image, ImageResponsive } from './styles'

export default () => {
  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      id="sideNav"
    >
      <span className="navbar-brand js-scroll-trigger">
        <span className="d-block d-lg-none">
          <ImageResponsive
            className="img-fluid mx-auto"
            src={logotipo}
            alt="Provocatto"
          />
        </span>
        <span className="d-none d-lg-block">
          <Image
            className="img-fluid mx-auto"
            src={logotipo}
            alt="Provocatto"
          />
        </span>
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-md-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              Menu 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">
              Menu 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">
              Menu 3
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">
              Menu 4
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">
              Menu 5
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#awards">
              Menu 6
            </a>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};
