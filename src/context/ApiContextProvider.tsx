import { useEffect, useState } from "react";
import ApiContext from "./ApiContext";
import { ApiContextProps, Info } from "../types/ApiContextTypes";
import axios from "axios";

const ApiContextProvider = ({ children } : ApiContextProps) => {

  const [data, setData] = useState<Object[] | []>([]);
  const [information, setInformation] = useState<Info | null>(null);
  const [url, setUrl] = useState<string>("");

  const makeCall : Function = async () =>  {
    let res = await axios.get(url);

    let dataResponse = res.data;
    let dataArray = dataResponse.results as Object[];
    let information = dataResponse.info as Info;

    setInformation(information)
    setData(dataArray);
  }
  

  useEffect(()=>{
    if(url != "") makeCall();
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