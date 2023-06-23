import ListElement from '../atoms/ListElement';

const Nav = () => {
  return (
    <>
      <div className="flex justify-center bg-slate-800 py-4">
        <ul className="flex gap-5 items-center text-white">
          <ListElement label="Home" path="/" $styles="text-greeen-800 text-xl"/>
          <ListElement label="characters" path="/characters"/>
          <ListElement label="locations" path="/locations"/>
          <ListElement label="episodes" path="/episodes"/>
        </ul>
      </div>
    </>
  );
}

export default Nav;