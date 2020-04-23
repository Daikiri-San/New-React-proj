import React from "react";
import Header from "../components/Header";
import SearchStringForm from "../components/SearchStringForm";
import StringsList from "../components/StringsList";

const StringsPage = () => {
  return (
    <>
      <Header title="Строки" />
      <SearchStringForm />
      <StringsList />
    </>
  );
};

export default StringsPage;
