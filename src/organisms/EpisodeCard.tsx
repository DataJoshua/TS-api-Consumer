import CardsContainer from "../templates/CardsContainer";
import { EpisodeCardPros } from "../types/OrganismsTypes";

const EpisodeCard = ({ episode : { name, air_date, episode } } : EpisodeCardPros) => {

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