import React, { useState, useEffect } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
const LatestMovies = ({ BASE_URL, API_KEY }) => {
  const [movies, setMovies] = useState([]);

  const getLatestMovies = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}movie/upcoming?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  useEffect(() => {
    getLatestMovies();
  }, []);

  const scrollLeft = () => {
    const latestMovies = document.querySelector(".latestMovies");
    latestMovies.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const latestMovies = document.querySelector(".latestMovies");
    latestMovies.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="">
      <h1 className="font-semibold text-2xl px-1 text-white py-2">
        Latest in Movies
      </h1>
      <div className="w-[88vw] mx-auto">
        <div className="flex justify-between items-center">
          <p onClick={scrollLeft} className="text-white font-bold text-3xl">
            <CiCircleChevLeft />
          </p>
          <div className="latestMovies flex gap-3 px-1 overflow-x-auto">
            {movies.map((Element, id) => {
              return (
                <Link to={`movie/${Element.id}`}>
                  <img
                    key={id}
                    className="min-w-28 rounded-md cursor-pointer"
                    src={`https://image.tmdb.org/t/p/w500/${Element.poster_path}`}
                    alt=""
                  />
                </Link>
              );
            })}
          </div>
          <p onClick={scrollRight} className="text-white font-bold text-3xl">
            <CiCircleChevRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestMovies;
