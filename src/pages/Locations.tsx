import { useContext, useEffect, useRef, useState } from "react";
import ApiContext from "../context/ApiContext";
import { ApiContextType, Location } from "../types/ApiContextTypes";
import LocationCard from "../organisms/LocationCard";
import CardsContainer from "../templates/CardsContainer";
import Pagination from "../molecules/Pagination";
import SearchBox from "../molecules/SearchBox";

const Locations = () => {
  
  useEffect(()=>{
    setUrl("https://rickandmortyapi.com/api/location");
  }, [])

  const inputValue = useRef<HTMLInputElement>(null)
  
  const { results, info, setUrl } = useContext(ApiContext) as ApiContextType;
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState<string>("");

  const handleOnNext = () => {
    setUrl(info?.next);
    setPage(prev => prev + 1);
  }

  const handleOnPrev = () => {
    setUrl(info?.prev)
    setPage(prev => prev - 1);
  }

  const handleOnSearch = () => {
    const val = inputValue.current?.value as string;
    setValue(val);
  }

  
  return (
    <>
      <div className="px-[60px]">
        <SearchBox inputValue={inputValue} handleOnSearch={handleOnSearch} />
        <CardsContainer>
          { results?.filter((val)=>{
            let loc = val as Location;
            let nameLowed = loc.name.toLowerCase();
            let valLowed = value.toLowerCase();

            return nameLowed.includes(valLowed);
          }).map(val => <LocationCard location={val as Location} />)}
        </CardsContainer>
        <Pagination info={info} page={page} handleOnNext={handleOnNext} handleOnPrev={handleOnPrev}/>
      </div>
    </>
  );
}


export default Locations;
