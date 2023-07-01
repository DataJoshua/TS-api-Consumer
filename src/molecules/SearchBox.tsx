import Button from "../atoms/Button"
import { SearchBoxProps } from "../types/MoleculesTypes"

const SearchBox = ( { inputValue, handleOnSearch} : SearchBoxProps )=> {
  return(
    <>
      <div className="flex justify-center mt-[50px] gap-5 items-center">
        <label className="text-lg text-green-500">Search</label>
        <input ref={inputValue} className="border rounded outline-none border-slate-400 py-2 px-5" type="text" />
        <Button label="go" styles="py-2 px-5 bg-blue-600 text-white rounded" handleOnClick={()=> handleOnSearch()}/>
      </div>
    </>
  )
}

export default SearchBox;