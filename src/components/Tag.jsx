import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

function Tag() {

//   const [git,setGif]=useState('')
//   const [tag,setTag]=useState('')
//   const [loading,setLoading]=useState(false)
//   const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
//   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

//  async function fetchData(){
//   setLoading(true)
//   const {data}=await axios.get(url);
//   const imageSource = data.data.images.downsized_large.url;
//   setGif(imageSource);
//   setLoading(false)
//   console.log(imageSource)  
//  }

//   function changeHandler(event) {
//     setTag(event.target.value)
    
//   }
//   function clickHandler(){
//     fetchData()
//   }
//   useEffect(()=>{
//     fetchData()},[])

const [tag,setTag]=useState('cars')
const {gif,loading,fetchData}=useGif(tag);

  return (
    
    <div className="w-1/2  bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
      }

      <input type="text" 
        onChange={(event)=>setTag(event.target.value)}
        value={tag}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
        
        />

      <button

        onClick={()=>fetchData(tag)}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold pb-2"
      >
        Generate
      </button>   
    </div>  

  )
}

export default Tag