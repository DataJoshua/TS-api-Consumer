import { useContext, useState } from "react";
import Button from "../atoms/Button";
import ApiContext from "../context/ApiContext";
import { ApiContextType, Character } from "../types/ApiContextTypes";
import CardsContainer from "../templates/CardsContainer";
import Card from "../organisms/Card";
import PaginationButtonsContainer from "../templates/PaginationButtonsContainer";

const Home = () => {
  
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
          {results?.map(val => <Card character={val}/>)}
        </CardsContainer>
        <PaginationButtonsContainer>
          <Button label="prev" isDisabled={info?.prev} handleOnClick={handleOnPrev}></Button>
          <h1>Page number {page}</h1>
          <Button label="next" isDisabled={info?.next} handleOnClick={handleOnNext}></Button>  
        </PaginationButtonsContainer>
      </div>
    </>
  )
}

export default Home;