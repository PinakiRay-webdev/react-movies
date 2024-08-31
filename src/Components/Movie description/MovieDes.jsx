import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaRegCirclePlay } from "react-icons/fa6";

import { FaChevronCircleRight , FaChevronCircleLeft } from "react-icons/fa";

import Cast from "./Cast";
import SimilarMovies from "./SimilarMovies";

const MovieDes = ({ BASE_URL, API_KEY }) => {
  const params = useParams();
  const MovieId = params.id;

  const [getDetails, setGetDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [productionCompanies, setProductionCompanies] = useState([]);
  const [country, setCountry] = useState([]);
  const [toggleCast, setToggleCast] = useState(true)

  const getMovieDetails = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${MovieId}?api_key=${API_KEY}`
      );
      const data = await response.json();
      setGetDetails(data);
      setGenres(data.genres);
      setProductionCompanies(data.production_companies);
      setCountry(data.production_countries);
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [MovieId]);

  const viewCast = () =>{
    setToggleCast(!toggleCast);
  }

  return (
    <div className="w-[100vw] pl-[10vw] h-screen overflow-x-hidden">
      {/* hero-section  */}
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
            {/* image of the movie  */}
            {getDetails.belongs_to_collection?.poster_path ? (
              <img
                className="w-64"
                src={`https://image.tmdb.org/t/p/w500/${getDetails.belongs_to_collection.poster_path}`}
                alt={`Collection poster for ${getDetails.original_title}`}
              />
            ) : (
              <img
                className="w-64"
                src={`https://image.tmdb.org/t/p/w500/${getDetails.poster_path}`}
                alt={`Poster of ${getDetails.original_title}`}
              />
            )}

            {/* details of the movie  */}
            <div className="w-full">
              <div className="flex items-center gap-5">
                <p className="text-white font-semibold text-sm">
                  {`${getDetails.release_date}`.substring(0, 4)}
                </p>
                <p className="text-white font-semibold text-sm">
                  {getDetails.runtime} mins
                </p>
                <p className="text-white font-semibold text-sm">
                  {getDetails.status}
                </p>
              </div>

              <div className="flex items-center justify-between text-white">
                <h1 className="font-black text-6xl leading-[5rem]">
                  {getDetails.original_title}
                </h1>
                <p className="text-5xl cursor-pointer">
                  <FaRegCirclePlay />
                </p>
              </div>
              <p className="text-white font-semibold text-sm">
                {getDetails.tagline}
              </p>

              {/* overview section  */}
              <div className="py-7">
                <p className="text-zinc-400">{getDetails.overview}</p>
              </div>

              {/*Genres section*/}
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

              {/* footer part  */}
              <div className="flex justify-between items-end">
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

                {/* vote count  */}

                <p className="text-lime-400 text-2xl" >{getDetails.vote_count}<sup>+</sup> <span className="text-sm text-white" >Votes</span> </p>

                {/* production country */}

                <div className="flex items-end gap-4">
                  <div className="flex gap-3" >
                  {country.map((Element, id) => {
                    return (
                      <p key={id} className="text-red-400 font-light text-2xl">
                        {Element.iso_3166_1}
                      </p>
                    );
                  })}
                  </div>
                  <p className="text-white"> : based movie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main section  */}

      <main className="px-8 py-4 bg-black">
        {/* production section  */}
        <section className="pb-10">
          <header className="flex items-end justify-between">
            <h3 className="text-white text-xl border-b-2 pr-2">Studios and distributors</h3>
            <p className="text-sm text-amber-600">See more</p>
          </header>

          <div className="production flex gap-14 py-4">
            {productionCompanies.map((Element, id) => {
              return Element.logo_path ? (
                <img
                  key={id}
                  className="h-12 grayscale invert"
                  src={`https://image.tmdb.org/t/p/w500/${Element.logo_path}`}
                  alt=""
                />
              ) : null;
            })}
          </div>
        </section>

        {/* cast section  */}
        <section className="pb-10" >
          <header className="flex items-end justify-between">
            <h3 className="text-white text-xl pr-2 border-b-2">Casts</h3>
            <p onClick={viewCast} className="text-sm text-amber-600 cursor-pointer">{toggleCast ? "See more" : "See less"}</p>
          </header>

            <Cast toggleCast = {toggleCast} MovieId={MovieId} BASE_URL = {BASE_URL} API_KEY={API_KEY} />
        </section>

        {/* similar movies  */}
        <section className="pb-10" >
        <header className="flex items-center justify-between">
            <h3 className="text-white text-xl pr-2 border-b-2">Similar movies</h3>
            <div className="flex gap-4">
            <p className=" text-amber-600 cursor-pointer"><FaChevronCircleLeft/></p>
            <p className=" text-amber-600 cursor-pointer"><FaChevronCircleRight/></p>
            </div>
          </header>

            <SimilarMovies MovieId={MovieId} BASE_URL = {BASE_URL} API_KEY={API_KEY} />

        </section>
      </main>
    </div>
  );
};

export default MovieDes;
