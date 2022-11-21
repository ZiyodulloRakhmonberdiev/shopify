import React from "react";
import { EmptyBoxWrapper } from "./styles";
import emptyImg from "../../Assets/assets/main/empty-box.svg";
import emptyImgDark from "../../Assets/assets/main/empty-box-dark.svg";

function EmptyBox({ item, dark,cart }) {
  return (
    <EmptyBoxWrapper dark={dark}>
      <img src={dark ? emptyImgDark : emptyImg} alt="empty page" />
      <p> {item} is free! Not found</p>
    </EmptyBoxWrapper>
  );
}

export default EmptyBox;
