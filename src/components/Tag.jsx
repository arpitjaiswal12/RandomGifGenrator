import axios from 'axios';
import React, { useState } from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

function Tag() {
  const [tag, setTag] = useState('cars');
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] p-5">
      <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width="450" alt="Random Gif" className="rounded-md" />
      )}

      <input
        type="text"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
        className="w-full max-w-xs bg-white text-xl py-3 px-4 mt-4 rounded-lg font-semibold text-center"
        placeholder="Enter a tag"
      />

      <button
        onClick={() => fetchData(tag)}
        className="w-full max-w-xs bg-white text-xl py-3 px-4 mt-4 rounded-lg font-bold hover:bg-gray-200 transition duration-200"
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
