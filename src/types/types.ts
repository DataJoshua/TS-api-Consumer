import { MouseEventHandler, ReactNode } from "react"
import { JsxElement } from "typescript"

export interface ButtonProps {
  label : string
  handleOnClick? : MouseEventHandler<HTMLButtonElement>
}

export interface ApiContextProps {
  children : ReactNode
}
