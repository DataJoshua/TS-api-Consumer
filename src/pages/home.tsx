import { useContext } from "react";
import Button from "../atoms/Button";
import ApiContext from "../context/ApiContext";
import { ApiContextType, Character } from "../types/ApiContextTypes";
import CardsContainer from "../templates/CardsContainer";
import Card from "../organisms/Card";

const Home = () => {
  
  const { results, info , setUrl } = useContext(ApiContext) as ApiContextType;

  const handleOnClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) =>  {
    console.log("hello world");
    setUrl(info?.next)
  }

  return (
    <>
      <div>
        <CardsContainer>
          {results?.map(val => <Card character={val}/>)}
        </CardsContainer>
        <Button label="click to change link" handleOnClick={handleOnClick}></Button>
      </div>
    </>
  )
}

export default Home;