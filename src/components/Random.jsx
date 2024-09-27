import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Random() {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] p-5">
      <h1 className="text-3xl uppercase underline font-bold">Random Gif</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width="450" alt="Random Gif" className="rounded-md" />
      )}
      <button
        onClick={fetchData}
        className="w-full max-w-xs bg-white text-xl py-3 px-4 mt-4 rounded-lg font-bold hover:bg-gray-200 transition duration-200"
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
