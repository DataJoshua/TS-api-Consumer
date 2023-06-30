import axios from "axios";
import { useEffect, useState } from "react";

const useFindById = (type: string, id: string) => {
  
  const [data, setData] = useState<Object | null>(null);

  const makeCall = async () => {
    let res = await axios.get(`https://rickandmortyapi.com/api/${type}/${id}`);

    setData(res.data);
    console.log(res.data);
  }

  useEffect(()=>{
    makeCall();
  }, []);

  return data;
}

export default useFindById;