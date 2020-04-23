import React from "react";
// import { useSelector } from "react-redux";
// import { authSelectors } from "../redux/auth";
// import Spinner from "./Spinner";

const Layout = ({ children }) => {
  // const isLoading = useSelector(authSelectors.getLoading);

  return (
    <div className="layout">
      {/* {isLoading && <Spinner />} */}
      {children}
    </div>
  );
};

export default Layout;
