import React, { useState, useEffect } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
const TopRatedShows = ({ BASE_URL, API_KEY }) => {
  const [topRated, setTopRated] = useState([]);

  const getTopRatedShows = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}tv/top_rated?api_key=${API_KEY}`
      );
      const data = await response.json();
      setTopRated(data.results);
    } catch (error) {
      console.log({ msg: error.message });
    }
  };

  useEffect(() => {
    getTopRatedShows();
  }, []);

  const scrollLeft = () => {
    const topRatedShows = document.querySelector(".topRatedShows");
    topRatedShows.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const topRatedShows = document.querySelector(".topRatedShows");
    topRatedShows.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div>
      <h1 className="font-semibold text-2xl text-white py-2 px-1">
        Top Rated Tv Shows
      </h1>
      <div className="w-[88vw] mx-auto">
        <div className="flex justify-between items-center">
          <p onClick={scrollLeft} className="text-white font-bold text-3xl">
            <CiCircleChevLeft />
          </p>
          <div className="topRatedShows flex gap-3 px-1 overflow-x-auto">
            {topRated.map((Element, id) => {
              return (
                <Link to={`tv/${Element.id}`} >                
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

export default TopRatedShows;
