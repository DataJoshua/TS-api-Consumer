import useQuery from "../hooks/useQuery";
import CardsContainer from "../templates/CardsContainer";
import { Character } from "../types/ApiContextTypes";
import { EpisodeDisplatProps } from "../types/OrganismsTypes";
import Card from "./Card";

const EpisodeDisplay = ( { episode: { characters, name, air_date, episode }}  : EpisodeDisplatProps) => {
  
  const charactersElements = useQuery(characters);

  return (
    <div className="p-5 rounded-lg shadow-lg hover:shadow-xl transition">
    <div className="mt-[10px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-center text-2xl">  Chapter Name:{name}</h1>
          <table className="border border-colapse">
            <tbody>
              <tr className="border border-colapse">
                <td className="border border-colapse p-3 font-bold">Air date:</td>
                <td className="border border-colapse p-3"> {air_date}</td>
              </tr>
              <tr className="border border-colapse">
                <td className="border border-colapse p-3 font-bold">Air date:</td>
                <td className="border border-colapse p-3"> {episode}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 className="text-center font-bold text-2xl mt-5">Characters at the episode: </h1>
        <CardsContainer>
          {charactersElements?.map(val => <Card character={val as Character}/>)}
        </CardsContainer>
      </div>
    </div>
  </div> 
  );
}

export default EpisodeDisplay;