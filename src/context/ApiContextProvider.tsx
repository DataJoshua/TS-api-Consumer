import { useEffect, useState } from "react";
import { ApiContextProps } from "../types/types";
import ApiContext from "./ApiContext";
import { Character } from "../types/ApiContextTypes";

const ApiContextProvider = ({ children } : ApiContextProps) => {

  const [data, setData] = useState<Character[] | []>([]);

  const makeCall : Function = async () =>  {
    let res = await fetch("https://rickandmortyapi.com/api/character", {
      method: "GET"
    });

    let dataResponse = await res.json();
    let dataArray = dataResponse.results as Character[];

    setData(dataArray);
  }
  

  useEffect(()=>{
    makeCall();
  }, [])


  return (
    <ApiContext.Provider value={data}>{children}</ApiContext.Provider>
  );
}

export default ApiContextProvider;