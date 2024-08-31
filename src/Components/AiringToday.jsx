import React, { useEffect, useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";

const AiringToday = ({ BASE_URL, API_KEY }) => {
  const [airing, setAiring] = useState([]);

  const getAiringToday = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}tv/airing_today?api_key=${API_KEY}`
      );
      const data = await response.json();
      setAiring(data.results);
    } catch (error) {
      console.log({ msg: error.message });
    }
  };

  useEffect(() => {
    getAiringToday();
  }, []);

  const scrollLeft = () => {
    const airingToday = document.querySelector(".airingToday");
    airingToday.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const airingToday = document.querySelector(".airingToday");
    airingToday.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div>
      <h1 className="py-2 px-1 text-white font-semibold text-2xl">
        Airing Today
      </h1>
      <div>
        <div className="flex justify-between items-center">
          <p onClick={scrollLeft} className="text-white font-bold text-3xl">
            <CiCircleChevLeft />
          </p>
          <div className="airingToday flex gap-3 px-1 overflow-x-auto w-[84vw]">
            {airing.map((Element, id) => {
                return(
                  <Link to={`tv/${Element.id}`} >
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
          <p onClick={scrollRight} className="text-white font-bold text-3xl">
            <CiCircleChevRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiringToday;
