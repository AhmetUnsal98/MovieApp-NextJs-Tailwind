import React from "react";
import Image from "next/image";

const Movies = ({ dt }) => {
  return (
    <div className="min-w-[400px] relative">
      <Image
        style={{ objectfit: "cover" }}
        width={400}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${dt.backdrop_path}`}
      />
      <a href={`/movie/${dt?.id}`}>
        <div className="absolute cursor-pointer bottom-0 p-3 z-10 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
          <div className="text-xl font-bold text-white">{dt.title}</div>
          <div className="text-lg font-bold text-white">
            {dt.release_date} - {dt.vote_average}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Movies;
