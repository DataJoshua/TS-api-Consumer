import { useParams } from "react-router-dom";
import useFindById from "../hooks/useFindById";
import { Episode } from "../types/ApiContextTypes";
import EpisodeDisplay from "../organisms/EpidodeDisplay";
import Loading from "../molecules/Loading";

const EpisodePage = () => {

  const { id } = useParams();

  const episode = useFindById("episode", id as string) as Episode;

  return (<>
    {episode ? <EpisodeDisplay key={id} episode={episode}/> : <Loading />}
  </>)

}

export default EpisodePage;