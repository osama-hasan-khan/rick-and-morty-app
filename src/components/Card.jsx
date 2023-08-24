import React from "react";

const Card = ({ char }) => {
  return (
    <div className="h-[400px] w-[350px] border-b border-slate-900 flex flex-col justify-center items-center relative">
      <img src={char.image} alt="logo" className="rounded-xl" />
      <div className="font-bold font-mono mt-3 text-xl">{char.name}</div>
      <p className="font-mono">Last Location</p>
      <div className="font-mono font-extrabold text-lg">
        {char.location.name}
      </div>
      <div className="absolute top-5 right-4 p-2 bg-black text-white">
        {char.gender}
      </div>
      <div className="absolute bottom-28 font-mono font-bold  left-4 p-2 bg-black text-white">
        {char.status}
      </div>
    </div>
  );
};

export default Card;
