import { useContext } from "react";
import Button from "../atoms/Button";
import ApiContext from "../context/ApiContext";
import { Character } from "../types/ApiContextTypes";

const Home = () => {
  
  const data = useContext(ApiContext) as Character[];

  const handleOnClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) :void  =>  {
    console.log("hello world");
  }

  return (
    <>
      <div>
        <Button label="Click" handleOnClick={handleOnClick}></Button>
      </div>
    </>
  )
}

export default Home;