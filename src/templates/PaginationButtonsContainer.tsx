import { PaginationContainerProps } from "../types/TemplateTypes";

const PaginationButtonsContainer = ({ children } : PaginationContainerProps) => {
 return (
  <div className="flex justify-between items-center">
    {children}
  </div>
 ); 
}

export default PaginationButtonsContainer;