import { useNavigate } from "react-router-dom";
import Image from "../atoms/Image";
import { CardProps } from "../types/OrganismsTypes";

const Card = ( { character: {id, name, species, gender, image } } : CardProps ) => {
  
  const navigate = useNavigate();

  const handleOnClick = () => navigate(`/characters/${id}`);
  
  return (
    <div onClick={handleOnClick} className="p-5 rounded-lg shadow-lg hover:shadow-xl hover:cursor-pointer transition">
      <Image url={image}></Image>
      <div className="mt-[10px]">
        <h1 className="font-bold">{name}</h1>
        <p>{species}</p>
        <p>{gender}</p>
      </div>
    </div>
  )
}

export default Card;