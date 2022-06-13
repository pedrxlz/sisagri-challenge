import { React, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signin from "../pages/Signin";
import Home from "../pages/Home";

const RoutesApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/" element={<Signin />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </div>
  );
};

export default RoutesApp;
