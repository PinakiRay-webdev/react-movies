import { data } from "autoprefixer";
import React, { useEffect, useState , } from "react";

const Cast = ({ MovieId, BASE_URL, API_KEY , toggleCast }) => {
  const [cast, setCast] = useState([]);

  const getCast = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${MovieId}/credits?api_key=${API_KEY}`
      );
      const data = await response.json();
      setCast(data.cast);
    } catch (error) {
      console.log({ msg: error.message });
    }
  };

  useEffect(() => {
    getCast();
  }, [MovieId]);

  let number = toggleCast ? 8 : data.length;


  return (
    <div className="grid grid-cols-4 gap-5 py-4" >
      {cast.slice(0,number).map((Element, id) => {
        return Element.profile_path ?  (
          <div className="flex items-end gap-3"  key={id} >
            <div className="w-20 h-20">
              <img
                className="w-full h-full rounded-full object-cover"
                src={`https://image.tmdb.org/t/p/w500/${Element.profile_path}`}
                alt=""
              />
            </div>
            <div>
                <p className="text-amber-300 text-md" >{Element.name}</p>
                <p className="text-sm text-[#ffd00090]" >As {Element.character}</p>
            </div>
          </div>
        ) : null
      })}
    </div>
  );
};

export default Cast;
