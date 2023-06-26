import { useContext, useEffect, useRef, useState } from "react";
import Button from "../atoms/Button";
import ApiContext from "../context/ApiContext";
import { ApiContextType, Character } from "../types/ApiContextTypes";
import CardsContainer from "../templates/CardsContainer";
import Card from "../organisms/Card";
import PaginationButtonsContainer from "../templates/PaginationButtonsContainer";
import Pagination from "../molecules/Pagination";
import { log } from "console";

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
  }

  return (
    <>
      <div className="px-[100px]">
        <div className="flex justify-center mt-[50px] gap-5 items-center">
          <label className="text-lg text-green-500">Search</label>
          <input ref={inputValue} className="border rounded outline-none border-slate-400 py-2 px-5" type="text" />
          <Button label="go" styles="py-2 px-5 bg-blue-600 text-white rounded" handleOnClick={handleOnSearch}/>
        </div>
        <CardsContainer>
          {results?.filter(val  => {
            let character = val as Character;
            let name = character.name.toLowerCase();
            let query = value.toLocaleLowerCase()
            return name.includes(query);
          }).map(val => <Card character={val as Character}/>)}
        </CardsContainer>
        <Pagination page={page} info={info} handleOnNext={handleOnNext} handleOnPrev={handleOnPrev} />
      </div>
    </>
  )
}

export default Characters;