import { MouseEventHandler } from "react"

export interface ListElementProps {
  label : string
  path : string
  $styles? : string
}

export interface ButtonProps {
  label : string
  handleOnClick? : MouseEventHandler<HTMLButtonElement>
}
