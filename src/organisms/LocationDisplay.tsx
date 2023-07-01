import { useEffect, useState } from "react";
import useQuery from "../hooks/useQuery";
import CardsContainer from "../templates/CardsContainer";
import { Character } from "../types/ApiContextTypes";
import { LocationDisplatProps } from "../types/OrganismsTypes";
import Card from "./Card";
import LocationCard from "./LocationCard";

const LocationDisplay = ({location: {name, type, dimension, residents }} :  LocationDisplatProps) => {
  
  const charactersElements = useQuery(residents) as Character [];

  console.log(charactersElements);
  
  
  return(
    <div className="p-5 rounded-lg shadow-lg hover:shadow-xl transition">
    <div className="mt-[10px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-center text-2xl">{name}</h1>
          <table className="border border-colapse">
            <tbody>
              <tr className="border border-colapse">
                <td className="border border-colapse p-3 font-bold">Type:</td>
                <td className="border border-colapse p-3"> {type}</td>
              </tr>
              <tr className="border border-colapse">
                <td className="border border-colapse p-3 font-bold">Dimension:</td>
                <td className="border border-colapse p-3"> {dimension}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 className="text-center font-bold text-2xl mt-5">Characters at the episode: </h1>
        <CardsContainer>
          {charactersElements?.map(val => <Card key={(val as Character).id} character={val as Character}/>)}
        </CardsContainer>
      </div>
    </div>
  </div> 
  )
}

export default LocationDisplay;