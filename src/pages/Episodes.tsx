import { useContext, useEffect, useRef, useState } from "react"
import ApiContext from "../context/ApiContext"
import { ApiContextType, Episode } from "../types/ApiContextTypes";
import CardsContainer from "../templates/CardsContainer";
import EpisodeCard from "../organisms/EpisodeCard";
import Pagination from "../molecules/Pagination";
import SearchBox from "../molecules/SearchBox";

const Episodes = () => {

  const { info, results, setUrl } = useContext(ApiContext) as ApiContextType;

  const [page, setPage] = useState<number>(1);

  const [value, setValue] = useState<string>("");

  const inputValue = useRef<HTMLInputElement>(null);

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

  const handleOnSearch = () => {
    const val = inputValue.current?.value as string;
    setValue(val);
  }

  return(
    <div className="px-[100px]">
      <SearchBox inputValue={inputValue} handleOnSearch={handleOnSearch}/>
      <CardsContainer>
        {results?.filter( val => {
          const episode = val as Episode;
          const filterValue = value.toLowerCase();
          const episodeName = episode.name.toLowerCase();

          return episodeName.includes(filterValue);
        }).map(val => <EpisodeCard episode={val as Episode}/>)}
      </CardsContainer>
      <Pagination info={info} page={page} handleOnPrev={handleOnPrev} handleOnNext={handleOnNext} />
    </div>
  )
}

export default Episodes;