import React, { useState } from "react";
import { Input, Button } from "reactstrap";

const MakeComent = () => {
  const [textareaInput, setTextareaInput] = useState("");
  const onChangeTextareaInput = (value) => setTextareaInput(value);
  const applyComent = () => {
    console.log(textareaInput);
  };
  return (
    <div className="string-comment">
      <p className="string-comment__title">Комментарий</p>
      <div className="string-comment__container">
        <Input
          className="string-comment__textarea"
          type="textarea"
          name="comment-to-string"
          id="comment-to-string"
          value={textareaInput}
          onChange={({ target: { value } }) => onChangeTextareaInput(value)}
        />
        <Button
          className="string-comment__button"
          color="link"
          onClick={applyComent}
        >
          Применить
        </Button>
      </div>
      <p className="string-comment__info">Строка не требует перевода</p>
    </div>
  );
};

export default MakeComent;
