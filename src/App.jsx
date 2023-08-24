import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";

const App = () => {
  const [dataApi, setDataApi] = useState([]);
  

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setDataApi(data.results));
  }, []);

  console.log(dataApi);

  return (
    <div className="container m-auto mt-3">
      <h1 className="text-4xl text-center text-zinc-500 font-bold font-mono">
        Rick and Morty
      </h1>
      <Search />
      <div className="mt-9 grid grid-cols-4 gap-y-32 gap-x-8">
        {dataApi.map((char) => {
          return <Card char={char} key={char.id} />;
        })}
      </div>
    </div>
  );
};

export default App;
