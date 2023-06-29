import banner from "../assets/banner.jpg";
import rickImage from "../assets/rick.png";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  

  const navigate  = useNavigate();
  
  const handleOnClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const btn = e.target as HTMLButtonElement;
    const path = btn.innerText.toLowerCase();
    
    navigate(path);
  }

  return (
    <div className="relative w-full min-h-screen">
      <div className="relative w-full min-h-screen bg-[#000b] z-10 sm:flex-row flex flex-col justify-center gap-5 items-center">
        <div className="max-w-sm sm:max-w-[30%] flex flex-col gap-5">
          <h1 className="text-4xl text-green-500 text-center">Fetching the Rick and Morthy API</h1>
          <p className="text-center text-xl text-white">Here you can find all characters of Rick and Morthy series, this is a sample project made with React. I used the Rick and morthy oficial API</p>
          <div className="flex gap-3 justify-center">
              <Button label="Characters" isDisabled styles="bg-blue-500 px-5 py-3 rounded text-white" handleOnClick={handleOnClick}/>
              <Button label="Locations" isDisabled styles="bg-indigo-500 px-5 py-3 rounded text-white" handleOnClick={handleOnClick}/>
              <Button label="Episodes" isDisabled styles="bg-green-500 px-5 py-3 rounded text-white" handleOnClick={handleOnClick}/>
          </div>
        </div>
        <div className="max-w-sm sm:max-w-[700px]">
          <img src={rickImage} alt="" />
        </div>
      </div>  
      <div className="absolute top-0 left-0 bottom-0 right-0 z-0" style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}></div>
    </div>
  )
}

export default Home;