import { EpisodeCardPros } from "../types/OrganismsTypes";
import useQuery from "../hooks/useQuery";
import { useNavigate } from "react-router-dom";

const EpisodeCard = ({ episode : { id, name, air_date, episode } } : EpisodeCardPros) => {
  
  const navigate = useNavigate();

  const handleOnClick = () => navigate(`/episodes/${id}`);

  return (
  <>
    <div onClick={handleOnClick} className="p-5 rounded-lg shadow-lg hover:shadow-xl transition hover:cursor-pointer">
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