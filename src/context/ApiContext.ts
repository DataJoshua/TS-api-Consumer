import { createContext } from "react";
import { ApiContextType } from "../types/ApiContextTypes";

const ApiContext = createContext<ApiContextType | null>(null);

export default ApiContext;