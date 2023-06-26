import { ButtonProps } from "../types/AtomTypes";


const Button = ({ label, handleOnClick, isDisabled, styles }: ButtonProps) => {  
  return(
    <>
      <button className={styles ? styles : `w-[90px] h-[50px] shadow-lg ${isDisabled == null && "hidden"} transition rounded border-slate-500 box-shadow drop-shadow-3xl rounded-lg transition`} onClick={handleOnClick}>
        {label}
      </button>
    </>
  )
}

export default Button;