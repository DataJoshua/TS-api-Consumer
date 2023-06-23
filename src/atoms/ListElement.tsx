import { Link } from "react-router-dom";
import { ListElementProps } from "../types/AtomTypes";

const ListElement = ({ path, label, $styles } : ListElementProps ) => {
  return <li className="hover:underline text-green-400 text-lg"><Link  to={path}>{label}</Link></li>
}

export default ListElement;