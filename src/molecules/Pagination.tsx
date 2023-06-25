import { info } from "console"
import Button from "../atoms/Button"
import PaginationButtonsContainer from "../templates/PaginationButtonsContainer"
import { PaginationPros } from "../types/MoleculesTypes"

const Pagination = ( { info, page, handleOnNext, handleOnPrev } : PaginationPros ) => {
  return(
    <>
      <PaginationButtonsContainer>
        <Button label="prev" isDisabled={info?.prev} handleOnClick={() => handleOnPrev()}></Button>
        <h1>Page number {page}</h1>
        <Button label="next" isDisabled={info?.next} handleOnClick={() => handleOnNext()}></Button>  
      </PaginationButtonsContainer>
    </>
  )
}

export default Pagination;