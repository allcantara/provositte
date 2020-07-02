import React from "react";

import {
  Navbar,
  Home,
  Experience,
  Education,
  Skills,
  Interest,
  Awards,
} from "./pages";

import './globalStyles.css'

function App() {

  return (
      <div className="page-top" >
        <Navbar />

        <div className="container-fluid p-0">
          <Home />
          <hr className="m-0" />

          <Experience />
          <hr className="m-0" />

          <Education />
          <hr className="m-0" />

          <Skills />
          <hr className="m-0" />

          <Interest />
          <hr className="m-0" />

          <Awards />
        </div>
      </div>
  );
}

export default App;
