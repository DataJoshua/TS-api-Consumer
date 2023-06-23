import { CardProps } from "../types/OrganismsTypes";

const Card = ( { character } : CardProps ) => {
  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  )
}

export default Card;