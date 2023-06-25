import { LocationCardProps } from "../types/OrganismsTypes";

const LocationCard = ( { location : { id, name, type, dimension } } : LocationCardProps ) => {

  return (
    <div className="p-5 rounded-lg shadow-lg hover:shadow-xl transition">
    <div className="mt-[10px]">
      <h1 className="font-bold">{name}</h1>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
    </div>
  </div>
  )
}

export default LocationCard;