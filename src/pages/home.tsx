import { useContext } from "react";
import Button from "../atoms/Button";
import ApiContext from "../context/ApiContext";

const Home = () => {
  
  const data = useContext(ApiContext);

  console.log(data);
  

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