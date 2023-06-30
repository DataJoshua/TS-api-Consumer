import axios from "axios";
import { useEffect, useState } from "react";
import { Character } from "../types/ApiContextTypes";

const useQuery = ( urls : string [] ) => {

  const [data, setData] = useState<Character [] | []>([]); 

  const apiCall = async (url : string) => {
    try {
      let response = await axios.get(url);
      const character = response.data as Character;
  
      setData(prev => ([...prev, character]));
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    urls?.forEach(apiCall);
  }, []);

  return data;
};

export default useQuery;