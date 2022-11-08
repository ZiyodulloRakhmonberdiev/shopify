import React from "react";
import { ErrorBoxWrapper } from "./styles";
import errorImg from "../../Assets/main/warning.png";
function ErrorBox() {
  return (
    <ErrorBoxWrapper>
      <img src={errorImg} alt="error" />
      <p>
        Error
      </p>
    </ErrorBoxWrapper>
  );
}

export default ErrorBox;
