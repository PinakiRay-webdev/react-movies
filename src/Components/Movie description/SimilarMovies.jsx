import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const SimilarMovies = ({ MovieId, BASE_URL, API_KEY , toggleCast }) => {

     const[movies , setMovies] =  useState([]);

     const getSimilar = async () =>{
        try {
            const response = await fetch(`${BASE_URL}movie/${MovieId}/similar?api_key=${API_KEY}`)
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.log({msg : error.message});
            
        }
     }

     useEffect(()=>{
        getSimilar();
     },[MovieId]);

  return (
    <div className='similarMovies py-4 flex overflow-x-auto gap-5' >
      {movies.map((Element , id)=>{
        return(
          <Link to={`${Element.id}`} >          
          <img
          key={id}
          className="min-w-28 rounded-md cursor-pointer"
          src={`https://image.tmdb.org/t/p/w500/${Element.poster_path}`}
          alt=""
        />
          </Link>
        )
      })}
    </div>
  )
}

export default SimilarMovies
