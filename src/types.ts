import { MouseEventHandler } from "react"
import { JsxElement } from "typescript"

export interface ButtonProps {
  label : string
  handleOnClick : MouseEventHandler<HTMLButtonElement>
}
