import React from "react";
import { genres } from "../utils";
const Genres = ({starting , ending}) => {
  return (
    <div className="genreBox px-4 py-10 flex flex-wrap gap-2">
      {genres.slice(starting,ending).map((Element, id) => {
        return (
          <div
            key={id}
            className="g-box h-[15vh] flex items-center justify-center rounded-md cursor-pointer relative"
          >
            <p className="z-10 absolute font-semibold text-lg text-white">{Element.name}</p>
            <img className="w-full h-full object-cover brightness-[50%]" src={Element.imgage} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
