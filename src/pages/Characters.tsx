import { useContext, useEffect, useState } from "react";
import Button from "../atoms/Button";
import ApiContext from "../context/ApiContext";
import { ApiContextType, Character } from "../types/ApiContextTypes";
import CardsContainer from "../templates/CardsContainer";
import Card from "../organisms/Card";
import PaginationButtonsContainer from "../templates/PaginationButtonsContainer";
import Pagination from "../molecules/Pagination";

const Characters = () => {
  
  useEffect(()=>{
    setUrl("https://rickandmortyapi.com/api/character")
  }, [])

  const { results, info , setUrl } = useContext(ApiContext) as ApiContextType;

  const [page, setPage] = useState<number>(1);

  const handleOnPrev = ()=> {
    setUrl(info?.prev);

    setPage(prev => prev - 1);
  }
  const handleOnNext = ()=> {
    setUrl(info?.next);

    setPage(prev => prev + 1);
  }

  return (
    <>
      <div className="px-[100px]">
        <CardsContainer>
          {results?.map(val => <Card character={val as Character}/>)}
        </CardsContainer>
        <Pagination page={page} info={info} handleOnNext={handleOnNext} handleOnPrev={handleOnPrev} />
      </div>
    </>
  )
}

export default Characters;