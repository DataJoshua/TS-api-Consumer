import { useContext, useEffect, useState } from "react"
import ApiContext from "../context/ApiContext"
import { ApiContextType, Episode } from "../types/ApiContextTypes";
import CardsContainer from "../templates/CardsContainer";
import EpisodeCard from "../organisms/EpisodeCard";
import Pagination from "../molecules/Pagination";

const Episodes = () => {

  const { info, results, setUrl } = useContext(ApiContext) as ApiContextType;

  const [page, setPage] = useState<number>(1);

  const handleOnPrev = () => {
    setUrl(info?.prev);
    setPage(prev => prev - 1);
  }

  const handleOnNext = () => {
    setUrl(info?.next);
    setPage(prev => prev + 1);
  }

  useEffect(() => {
    setUrl("https://rickandmortyapi.com/api/episode");
  }, [])

  return(
    <div className="px-[100px]">
      <CardsContainer>
        {results?.map(val => <EpisodeCard episode={val as Episode}/>)}
      </CardsContainer>
      <Pagination info={info} page={page} handleOnPrev={handleOnPrev} handleOnNext={handleOnNext} />
    </div>
  )
}

export default Episodes;