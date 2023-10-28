" use client";
import React from "react";

import { Provider } from "react-redux";
import store from "./store";
// eslint-disable-next-line
const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
