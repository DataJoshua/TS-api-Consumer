export interface Character {
  id : number
  name : string
  species : string
  gender : string
}

export interface Info {
  count: number
  pages: number
  next: (string | null)
  prev: (string | null) 
}

export interface ApiContextType {
  results : (Character [] | null)
  info : (Info | {})
  setUrl :  Function
}