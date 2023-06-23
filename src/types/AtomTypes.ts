import { MouseEventHandler } from "react"

export interface ListElementProps {
  label : string
  path : string
  $styles? : string
}

export interface ButtonProps {
  label : string
  isDisabled? : (boolean | string | null)
  handleOnClick? : MouseEventHandler<HTMLButtonElement>
}

export interface ImageProps {
  url : string
}