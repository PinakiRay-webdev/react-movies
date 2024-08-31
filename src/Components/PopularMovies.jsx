import React, { useState, useEffect } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
const PopularMovies = ({ BASE_URL, API_KEY }) => {
  const [popular, setPopular] = useState([]);
  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}movie/popular?api_key=${API_KEY}`
      );
      const data = await response.json();
      setPopular(data.results);
    } catch (error) {
      console.log({ msg: error.message });
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  const scrollLeft = () => {
    const popularMovies = document.querySelector(".popularMovies");
    popularMovies.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const popularMovies = document.querySelector(".popularMovies");
    popularMovies.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div>
      <h1 className="text-white font-semibold text-2xl px-1 py-2">
        Popular in Movies
      </h1>
      <div>
        <div className="flex justify-between items-center">
          <p onClick={scrollLeft} className="text-white font-bold text-3xl">
            <CiCircleChevLeft />
          </p>
          <div className="popularMovies flex gap-3 px-1 overflow-x-auto w-[84vw]">
            {popular.map((Element, id) => {
              return (
                <Link  to={`movie/${Element.id}`} >
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

export default PopularMovies;
