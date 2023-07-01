import { useParams } from "react-router-dom";
import useFindById from "../hooks/useFindById";
import Loading from "../molecules/Loading";
import CharacterDisplay from "../organisms/CharacterDisplay";
import { Character } from "../types/ApiContextTypes";

const CharacterPage = () => {
  const { id } = useParams();

  const character = useFindById("character", id as string) as Character;

  return (<>{character ? <CharacterDisplay character={character} /> : <Loading/>}</>)
}

export default CharacterPage;