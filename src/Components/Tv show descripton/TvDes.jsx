import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaChevronCircleRight , FaChevronCircleLeft } from "react-icons/fa";
import Cast from "./Cast";
import SimilarMovies from "./SimilarMovies";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TvDes = ({ BASE_URL, API_KEY }) => {
  const params = useParams();

  const tvID = params.id;

  const [getDetails, setgetDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [productionCompanies, setProductionCompanies] = useState([]);
  const [network, setNetwork] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [toggleCast, setToggleCast] = useState(true)


  const getShowDetails = async () => {
    try {
      const response = await fetch(`${BASE_URL}tv/${tvID}?api_key=${API_KEY}`);
      const data = await response.json();
      setgetDetails(data);
      setGenres(data.genres);
      setProductionCompanies(data.production_companies);
      setNetwork(data.networks);
      setSeasons(data.seasons);
    } catch (error) {
      console.log({ msg: error.message });
    }
  };

  const viewCast = () =>{
    setToggleCast(!toggleCast);
  }

  useEffect(() => {
    getShowDetails();
  }, [tvID]);

  return (
    <div className="w-[100vw] pl-[10vw] h-screen overflow-x-hidden">
      <div className="hero-section h-screen relative">
        {/* backdrop image path  */}
        <div className="background-section h-screen absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${getDetails.backdrop_path}`}
            alt={`Backdrop of ${getDetails.original_title}`}
          />
        </div>

        <div className="detail-section absolute bottom-0 w-full h-screen flex items-center">
          <div className="w-[80%] mx-auto p-1 flex items-end gap-8">
            {/* poster image section  */}
            <img
              className="w-64"
              src={`https://image.tmdb.org/t/p/w500/${getDetails.poster_path}`}
              alt={`Poster of ${getDetails.original_title}`}
            />

            {/* details of the tv show  */}
            <div className="w-full">
              {/* heading section  */}
              <div className="flex items-center gap-5">
                <p className="text-white">
                  {`${getDetails.first_air_date}`.substring(0, 4)}
                </p>
                <p className="text-white">
                  {getDetails.in_production
                    ? "Running series"
                    : "Series completed"}
                </p>
              </div>

              {/* title of the series  */}
              <div className="flex items-center justify-between text-white">
                <h1 className="font-black text-6xl leading-[5rem]">
                  {getDetails.original_name}
                </h1>
                <p className="text-5xl cursor-pointer">
                  <FaRegCirclePlay />
                </p>
              </div>

              {/* genres section  */}
              <div className="flex gap-8 items-center">
                <p className="text-white text-md font-semibold">Genres</p>
                <div className="flex gap-4">
                  {genres.map((Element, id) => {
                    return (
                      <p
                        className="text-white border px-4 text-sm font-light rounded-xl"
                        key={id}
                      >
                        {Element.name}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* overview section  */}
              <div className="py-7">
                <p className="text-zinc-400">
                  {getDetails.overview == ""
                    ? "overview not available currently"
                    : getDetails.overview}
                </p>
              </div>

              {/* analytics part  */}
              <div className="grid grid-cols-4 gap-4">
                {/* imdb rating part  */}
                <div className="w-12 mt-4 flex items-end gap-2">
                  <div>
                    <CircularProgressbar
                      className="w-10"
                      value={`${Math.floor(getDetails.vote_average) * 10}`} // Adjust value calculation if needed
                      text={`${getDetails.vote_average}`.substring(0, 3)} // Display text
                      styles={buildStyles({
                        rotation: 0.0, // Starts at 12 o'clock
                        strokeLinecap: "butt", // Round ends of the path
                        textSize: "32px",
                        pathTransitionDuration: 0.5, // Animation duration
                        pathColor: "#bba815", // Color of the progress path
                        textColor: "#bba815", // Color of the text inside the circle
                        trailColor: "white", // Color of the background trail
                      })}
                    />
                  </div>
                  <p className="text-white text-sm">IMDB</p>
                </div>

                {/* vote count part  */}
                <div className="flex items-end gap-2">
                  <p className="text-lime-400 text-4xl">
                    {getDetails.vote_count}
                    <sup>+</sup>
                  </p>
                  <span className="text-white text-sm">Votes</span>
                </div>

                {/* No of episodes  */}
                <div className="flex items-end gap-2">
                  <p className="text-red-400 text-4xl">
                    {getDetails.number_of_episodes}
                  </p>
                  <span className="text-white text-sm">No. of episodes</span>
                </div>

                {/* no of seasons  */}
                <div className="flex items-end gap-2">
                  <p className="text-blue-400 text-4xl">
                    {getDetails.number_of_seasons}
                  </p>
                  <span className="text-white text-sm">No. of Seasons</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="bg-black px-8 py-4">
        <section className="pb-10">
          <header className="flex items-end justify-between">
            <h3 className="text-white text-xl border-b-2 pr-2">
              Production and Network house
            </h3>
            <p className="text-sm text-amber-600">See more</p>
          </header>

          <div className="production flex gap-14 py-4">
            {productionCompanies.map((Element, id) => {
              return Element.logo_path ? (
                <img
                  key={id}
                  className="h-8 grayscale invert mt-3"
                  src={`https://image.tmdb.org/t/p/w500/${Element.logo_path}`}
                  alt=""
                />
              ) : null;
            })}
            {network.map((Element, id) => {
              return Element.logo_path ? (
                <img
                  key={id}
                  className="h-8 grayscale invert mt-3"
                  src={`https://image.tmdb.org/t/p/w500/${Element.logo_path}`}
                  alt=""
                />
              ) : null;
            })}
          </div>
        </section>

        <section className="pb-10">
          <header className="">
            <h3 className="text-white text-xl pr-2 border-b-2 w-fit">Watch</h3>
            <div className="flex flex-wrap gap-5 py-3">
              {seasons.map((Element, id) => {
                return (
                  <div key={id} className="relative cursor-pointer">
                    <img
                      className="w-36"
                      src={`https://image.tmdb.org/t/p/w500/${Element.poster_path}`}
                      alt=""
                    />
                    <h3 className="text-white font-semibold text-lg mt-2 ">
                      {`${Element.name}`.length > 12
                        ? `${Element.name}`.substring(0, 12) + "..."
                        : Element.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-white text-sm">No of Episodes</p>
                      <p className="text-amber-300 text-sm font-semibold ">
                        {Element.episode_count}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </header>
        </section>
        
        {/* cast section  */}
        <section className="pb-10" >
          <header className="flex items-end justify-between">
            <h3 className="text-white text-xl pr-2 border-b-2">Casts</h3>
            <p onClick={viewCast} className="text-sm text-amber-600 cursor-pointer">{toggleCast ? "See more" : "See less"}</p>
          </header>

            <Cast toggleCast = {toggleCast} tvID={tvID} BASE_URL = {BASE_URL} API_KEY={API_KEY} />
        </section>

        {/* similar series  */}
        <section className="pb-10" >
        <header className="flex items-center justify-between">
            <h3 className="text-white text-xl pr-2 border-b-2">Similar Shows</h3>
            <div className="flex gap-4">
            <p className=" text-amber-600 cursor-pointer"><FaChevronCircleLeft/></p>
            <p className=" text-amber-600 cursor-pointer"><FaChevronCircleRight/></p>
            </div>
          </header>

            <SimilarMovies tvId={tvID} BASE_URL = {BASE_URL} API_KEY={API_KEY} />

        </section>
      </main>
    </div>
  );
};

export default TvDes;
