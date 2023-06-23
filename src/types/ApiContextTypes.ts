import { ReactNode } from "react"

export interface Character {
  id : number
  name : string
  species : string
  gender : string
  url :string
  image : string
}

export interface Info {
  count: number
  pages: number
  next: (string | null)
  prev: (string | null) 
}

export interface ApiContextType {
  results : (Character [] | null)
  info : (Info | null)
  setUrl :  Function
}

export interface ApiContextProps {
  children : ReactNode
}
