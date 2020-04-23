import { lazy } from "react";

export default [
  {
    path: "/",
    label: "StringsPage",
    exact: true,
    component: lazy(() =>
      import("./pages/StringsPage" /* webpackChunkName: "strings-home" */)
    ),
  },
  {
    path: "/make_string",
    label: "MakeStringPage",
    exact: false,
    component: lazy(() =>
      import(
        "./pages/MakeStringPage" /* webpackChunkName: "make_string-page" */
      )
    ),
  },
];
