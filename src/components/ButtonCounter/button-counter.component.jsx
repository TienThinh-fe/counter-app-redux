import React from "react";

import ButtonStyled from "./button-counter.styles";

function ButtonCounter({ func, handleOnClick }) {
  return (
    <ButtonStyled onClick={handleOnClick}>
      {func === "subtract" ? "-" : "+"}
    </ButtonStyled>
  );
}

export default ButtonCounter;
