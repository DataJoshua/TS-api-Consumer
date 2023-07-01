import { useParams } from "react-router-dom";
import useFindById from "../hooks/useFindById";
import { Location } from "../types/ApiContextTypes";
import LocationDisplay from "../organisms/LocationDisplay";
import Loading from "../molecules/Loading";

const LocationPage = () => {
  const { id } = useParams();

  const location = useFindById("location", id as string) as Location;

  return (<>{location ? <LocationDisplay location={location} /> : <Loading/>}</>)
}

export default LocationPage;