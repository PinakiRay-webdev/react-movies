import React, { useEffect, useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
const Banner = ({ BASE_URL, API_KEY }) => {
  const [trendingLists, setTrendingLists] = useState([]);

  const trendingShows = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}trending/all/week?api_key=${API_KEY}`
      );
      const data = await response.json();
      setTrendingLists(data.results);
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  useEffect(() => {
    trendingShows();
  }, []);

  const leftScroll = () => {
    const BannerContainer = document.querySelector(".BannerContainer");
    const bannerWidth = BannerContainer.offsetWidth;
    BannerContainer.scrollBy({ left: -bannerWidth, behavior: "smooth" });
  };

  const rightScroll = () => {
    const BannerContainer = document.querySelector(".BannerContainer");
    const bannerWidth = BannerContainer.offsetWidth;
    BannerContainer.scrollBy({ left: bannerWidth, behavior: "smooth" });
  };

  return (
    <section className="relative h-100vh overflow-y-hidden">
      <i
        onClick={leftScroll}
        className="absolute top-[50%] text-white text-5xl z-10 cursor-pointer"
      >
        <CiCircleChevLeft />
      </i>
      <div className="BannerContainer flex overflow-x-auto whitespace-nowrap h-full">
        {trendingLists.map((Element, id) => {
          return (
            <div key={id} className="relative min-w-[100%] h-full">
              {/* Banner image */}
              <img
                src={`https://image.tmdb.org/t/p/original/${Element.backdrop_path}`}
                alt=""
                className="w-screen h-screen object-cover"
              />
              {/* Banner data */}
              <div className="bannerData absolute top-0 h-screen left-0 w-full text-white flex items-center">
                <div className="pl-20">
                  {/* Title of the show */}
                  <h2 className="text-4xl font-bold">
                    {Element.title || Element.name}
                  </h2>
                  {/* Release date and type */}
                  <div className="flex gap-3 my-2">
                    <p>{Element.media_type}</p>
                    <p>{`${Element.release_date}`.substring(0, 4)}</p>
                  </div>
                  {/* Overview of the show */}
                  <div className="overview w-[40%] h-[12rem] overflow-hidden mt-3">
                    <p className="line-clamp text-[#e5e5e5] font-semibold">
                      {`${Element.overview}`.length > 412 ? `${Element.overview}`.substring(0, 411) + '...more' : Element.overview}
                    </p>
                  </div>
                  <div className="buttons flex gap-3">
                    <Link to={`${Element.media_type}/${Element.id}`} >
                    <button className="rounded bg-amber-500 w-60 px-5 py-2 text-black font-semibold" >Suscribe to watch</button>
                    </Link>
                    <button className="rounded bg-amber-500 w-12 px-5 py-2 text-black font-semibold" >+</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <i
        onClick={rightScroll}
        className="absolute top-[50%] text-white text-5xl right-0 z-10 cursor-pointer"
      >
        <CiCircleChevRight />
      </i>
    </section>
  );
};

export default Banner;
