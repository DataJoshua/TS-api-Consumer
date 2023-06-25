import { useContext, useEffect, useState } from "react";
import ApiContext from "../context/ApiContext";
import { ApiContextType, Location } from "../types/ApiContextTypes";
import LocationCard from "../organisms/LocationCard";
import CardsContainer from "../templates/CardsContainer";
import Pagination from "../molecules/Pagination";

const Locations = () => {
  
  useEffect(()=>{
    setUrl("https://rickandmortyapi.com/api/location")
  }, [])
  
  const { results, info, setUrl } = useContext(ApiContext) as ApiContextType;
  const [page, setPage] = useState<number>(1);

  const handleOnNext = () => {
    setUrl(info?.next);
    setPage(prev => prev + 1)
  }

  const handleOnPrev = () => {
    setUrl(info?.prev)
    setPage(prev => prev - 1)
  }

  
  return (
    <>
      <div className="px-[60px]">
        <CardsContainer>
          { results?.map(val => <LocationCard location={val as Location} />)}
        </CardsContainer>
        <Pagination info={info} page={page} handleOnNext={handleOnNext} handleOnPrev={handleOnPrev}/>
      </div>
    </>
  );
}


export default Locations;