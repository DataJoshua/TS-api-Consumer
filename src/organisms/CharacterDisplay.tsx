import { CharacterDisplayProps } from "../types/OrganismsTypes";

const CharacterDisplay = ( { character: { name, species, gender, image }}  : CharacterDisplayProps ) => {
  
  return (
    <div className="p-5">
      <div className="mt-[10px]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-center text-2xl">Name: {name}</h1>
            <img src={image} alt="" />
            <table className="border border-colapse">
              <tbody>
                <tr className="border border-colapse">
                  <td className="border border-colapse p-3 font-bold">species:</td>
                  <td className="border border-colapse p-3"> {species}</td>
                </tr>
                <tr className="border border-colapse">
                  <td className="border border-colapse p-3 font-bold">gender:</td>
                  <td className="border border-colapse p-3"> {gender}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  </div> 
  );
}

export default CharacterDisplay;