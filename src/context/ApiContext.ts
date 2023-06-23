import { createContext } from "react";
import { ApiContextType } from "../types/ApiContextTypes";

const ApiContext = createContext<any>(null);

export default ApiContext;