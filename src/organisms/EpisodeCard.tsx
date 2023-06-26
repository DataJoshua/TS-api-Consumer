import { EpisodeCardPros } from "../types/OrganismsTypes";
import { useEffect, useState } from "react";

const EpisodeCard = ({ episode : { name, air_date, episode, characters } } : EpisodeCardPros) => {

  const [charactersList, setCharactersList] = useState<string[] | null | []>([]);

  useEffect(() => {
    const charactersList = characters?.map(val => {
      let arr = val.split("/");
      let last = arr.length - 1;
      return val.split("/")[last]
    });

    setCharactersList(charactersList);
  }, [])
  
  return (
  <>
    <div className="p-5 rounded-lg shadow-lg hover:shadow-xl transition">
      <div className="mt-[10px]">
        <h1 className="font-bold">{name}</h1>
        <p>{air_date}</p>
        <p>{episode}</p>
      </div>
    </div> 
  </>
  );
}

export default EpisodeCard;