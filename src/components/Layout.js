import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Layout = ({ children }) => {
  const isLoading = useSelector(
    ({ authAdmin, strings }) => authAdmin.loading || strings.loading
  );

  return (
    <div className="layout">
      {isLoading && <Loader />}
      {children}
    </div>
  );
};

export default Layout;
