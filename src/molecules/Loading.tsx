const Loading = () => {
  return(
    <div className="min-h-screen w-full flex justify-center items-center gap-5">
      <div className="w-[100px] h-[100px] bg-indigo-800 animate-loading rounded"></div>
      <h1 className="text-xl font-bold">Loading..</h1>
    </div>
  );
}

export default Loading;