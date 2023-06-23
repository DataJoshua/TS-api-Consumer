import { createContext } from "react";
import { Character } from "../types/ApiContextTypes";

const ApiContext = createContext<Character [] | []>([]);

export default ApiContext;