import { Info } from "./ApiContextTypes";

export interface PaginationPros {
  info : Info | null
  page : number
  handleOnPrev : Function
  handleOnNext :  Function
}