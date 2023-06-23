import Button from "../atoms/Button";

const Home = () => {

  const handleOnClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) :void  =>  {
    console.log("hello world");
  }

  return (
    <>
      <div>
        <Button label="Click" handleOnClick={handleOnClick}></Button>
      </div>
    </>
  )
}

export default Home;