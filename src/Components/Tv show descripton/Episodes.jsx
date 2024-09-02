import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Episodes = ({ seasonNumber, BASE_URL, API_KEY, tvId }) => {
  const [tvEpisodes, setTvEpisodes] = useState([]);

  const getEpisodes = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}tv/${tvId}/season/${seasonNumber}?api_key=${API_KEY}`
      );
      const data = await response.json();
      setTvEpisodes(data.episodes);
    } catch (error) {}
  };

  useEffect(() => {
    getEpisodes();
  }, [seasonNumber]);

  return (
    <div className="px-8 py-4">
      {tvEpisodes.map((Element, id) => {
        return (
          <div key={id} className="my-2 py-2 px-1 bg-zinc-900 rounded-md flex gap-4">
            <img
              key={id}
              className="w-64 rounded-md cursor-pointer"
              src={`https://image.tmdb.org/t/p/w500/${Element.still_path}`}
              alt=""
            />

            <div>
              <header className="text-white font-semibold text-lg">{`S${seasonNumber} E${Element.episode_number} - ${Element.name}`}</header>
              <p className="text-zinc-400">
                {Element.air_date} {Element.runtime} mins{" "}
              </p>
              <div className="w-[93%] py-1">
                <h3 className="text-zinc-400">
                  {`${Element.overview}`.length > 160
                    ? `${Element.overview}`.substring(0, 160) + "...more"
                    : Element.overview}
                </h3>
              </div>

              <div className="w-12 mt-4">
                <div>
                  <CircularProgressbar
                    className="w-10"
                    value={`${Math.floor(Element.vote_average) * 10}`} // Adjust value calculation if needed
                    text={`${Element.vote_average}`.substring(0, 3)} // Display text
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Episodes;
