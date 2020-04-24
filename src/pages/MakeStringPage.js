import React from "react";
import { Button } from "reactstrap";
import Header from "../components/Header";
import MakeComent from "../components/MakeComent";
import StringTranslation from "../components/StringTranslation";

const MakeStringPage = () => {
  return (
    <>
      <Header title="Создать строку" />
      <div className="make-string">
        <MakeComent />
        <StringTranslation lang="Русский" />
        <StringTranslation lang="Английский" />
        <Button className="make-string__button" color="primary">
          Сохранить
        </Button>
      </div>
    </>
  );
};

export default MakeStringPage;
