import Image from "../atoms/Image";
import { CardProps } from "../types/OrganismsTypes";

const Card = ( { character: {name, species, gender, image } } : CardProps ) => {
  return (
    <div className="p-5 rounded-lg shadow-lg hover:shadow-xl transition">
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