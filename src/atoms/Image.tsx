import { ImageProps } from "../types/AtomTypes";

const Image = ({ url } : ImageProps)=> {
  return(
    <div className="rounded-lg overflow-hidden">
      <img className="w-full" src={url}/>
    </div>
  );
}

export default Image;