import { useContext, useEffect, useRef, useState } from "react";
import Button from "../atoms/Button";
import ApiContext from "../context/ApiContext";
import { ApiContextType, Character } from "../types/ApiContextTypes";
import CardsContainer from "../templates/CardsContainer";
import Card from "../organisms/Card";
import Pagination from "../molecules/Pagination";
import SearchBox from "../molecules/SearchBox";

const Characters = () => {
  
  useEffect(()=>{
    setUrl("https://rickandmortyapi.com/api/character")
  }, [])

  const { results, info , setUrl } = useContext(ApiContext) as ApiContextType;
  const [value, setValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const inputValue = useRef<HTMLInputElement>(null);

  const handleOnPrev = ()=> {
    setUrl(info?.prev);

    setPage(prev => prev - 1);
  }

  const handleOnNext = () => {
    setUrl(info?.next);

    setPage(prev => prev + 1);
  }

  const handleOnSearch = () => {
    const searchValue = inputValue.current?.value as string;
    setValue(searchValue);
    console.log(searchValue);
    
  }

  return (
    <>
      <div className="px-[100px]">
        <SearchBox inputValue={inputValue} handleOnSearch={handleOnSearch}/>
        <CardsContainer>
          {results?.filter(val  => {
            let character = val as Character;
            let name = character.name.toLowerCase();
            let query = value.toLocaleLowerCase();

            return name.includes(query);
          }).map(val => <Card character={val as Character}/>)}
        </CardsContainer>
        <Pagination page={page} info={info} handleOnNext={handleOnNext} handleOnPrev={handleOnPrev} />
      </div>
    </>
  )
}

export default Characters;