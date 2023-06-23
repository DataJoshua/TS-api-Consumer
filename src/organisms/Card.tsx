import { CardProps } from "../types/OrganismsTypes";

const Card = ( { character: {name, species, gender, image } } : CardProps ) => {
  return (
    <div className="">
      <h1>{name}</h1>
      <p>{species}</p>
      <p>{gender}</p>
    </div>
  )
}

export default Card;