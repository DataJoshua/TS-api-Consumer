import { useEffect, useState } from "react";
import { ApiContextProps } from "../types/types";
import ApiContext from "./ApiContext";
import { Character, Info } from "../types/ApiContextTypes";

const ApiContextProvider = ({ children } : ApiContextProps) => {

  const [data, setData] = useState<Character[] | []>([]);
  const [information, setInformation] = useState<Info | {}>({});
  const [url, setUrl] = useState<string>("https://rickandmortyapi.com/api/character");

  const makeCall : Function = async () =>  {
    let res = await fetch(url, {
      method: "GET"
    });

    let dataResponse = await res.json();
    let dataArray = dataResponse.results as Character[];
    let information = dataResponse.info as Info;

    setInformation(information)
    setData(dataArray);
  }
  

  useEffect(()=>{
    makeCall();
  }, [url])


  return (
    <ApiContext.Provider value={{
      results : data,
      info : information,
      setUrl
    }}>{children}</ApiContext.Provider>
  );
}

export default ApiContextProvider;