import React from "react";
import { Info } from "./ApiContextTypes";

export interface PaginationPros {
  info : Info | null
  page : number
  handleOnPrev : Function
  handleOnNext :  Function
}

export interface SearchBoxProps {
  inputValue : React.Ref<HTMLInputElement>
  handleOnSearch : Function
}