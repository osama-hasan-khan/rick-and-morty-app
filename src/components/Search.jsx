import React from "react";

const Search = () => {
  return (
    <div className="flex flex-row gap-14 items-center justify-center mt-4">
      <input
        type="text"
        placeholder="search character"
        className="p-3 px-6 outline-none border-2 border-zinc-700"
      />
      <button className="px-8 py-2 font-mono font-bold bg-zinc-950 text-white">
        Search
      </button>
    </div>
  );
};

export default Search;
