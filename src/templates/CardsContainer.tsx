import { CradsContainerProps } from "../types/TemplateTypes";

const CardsContainer = ({ children } : CradsContainerProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols py-[50px]">
      {children}
    </div>
  );
}

export default CardsContainer;