import React, { useState, useEffect } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";

const PopularShows = ({ BASE_URL, API_KEY }) => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    try {
      const response = await fetch(`${BASE_URL}tv/popular?api_key=${API_KEY}`);
      const data = await response.json();
      setPopular(data.results);
    } catch (error) {
      console.log({ msg: error.message });
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  const scrollLeft = () => {
    const popularShows = document.querySelector(".popularShows");
    popularShows.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const popularShows = document.querySelector(".popularShows");
    popularShows.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div>
      <h1 className="text-white text-2xl font-semibold py-2 px-1">
        Popular in Tv shows
      </h1>
      <div className="w-[88vw] mx-auto">
        <div className="flex justify-between items-center">
          <p onClick={scrollLeft} className="text-white font-bold text-3xl">
            <CiCircleChevLeft />
          </p>
          <div className="popularShows flex gap-3 px-1 overflow-x-auto">
            {popular.map((Element, id) => {
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

export default PopularShows;
