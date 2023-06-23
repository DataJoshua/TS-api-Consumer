import { ButtonProps } from "../types/AtomTypes";


const Button = ({ label, handleOnClick}: ButtonProps) => {  
  return(
    <>
      <button className="w-[90px] h-[30px] border border-xl rounded-lg border-blue-700 hover:bg-blue-200 rounded-lg transition" onClick={handleOnClick}>
        {label}
      </button>
    </>
  )
}

export default Button;