import { ReactNode } from "react"

export interface Character {
  id : number
  name : string
  species : string
  gender : string
  url :string
  image : string
}

export interface Location {
  id : number
  name : string
  type : string
  dimension : string
}

export interface Episode {
  id : number
  name :string
  air_date : string
  episode: string
}

export interface Info {
  count: number
  pages: number
  next: (string | null)
  prev: (string | null) 
}

export interface ApiContextType {
  results :  Object []
  info : (Info | null)
  setUrl :  Function
}

export interface ApiContextProps {
  children : ReactNode
}
