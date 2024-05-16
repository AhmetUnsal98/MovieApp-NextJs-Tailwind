import Image from "next/image";
import React from "react";

const getMovieById = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGJmNDcxYWM5N2UyZDQ5N2M3Yjk4YjU5ZGUwODY4MSIsInN1YiI6IjY2NDU0OGMwYWQwOGEzMDUwNzNkM2ExZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XD1-uLwJmSmthwc3Yjv2PWmyA4hnJn9RPr2txg3lTWg",
      },
    }
  );
  return res.json();
};

const Page = async ({ params }) => {
  const id = params.id;

  const movieDetail = await getMovieById(id);
  console.log(movieDetail.title, "res");
  return (
    <div className="relative p-7 min-h-screen">
      {" "}
      <Image
        fill
        style={{ objectfit: "cover" }}
        src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
      />
      <div className="absolute">
        <div className="m-2 text-4xl font-bold my-3">{movieDetail.title}</div>
        <div className="m-2 w-1/2">{movieDetail.overview}</div>
        <div className="text-lg font-bold text-white">
          {movieDetail.release_date} - {movieDetail.vote_average}
        </div>
        <div className=" my-2 border w-32 p-2 rounded-md text-center text-lg cursor-pointer hover:text-black transition">
          Trial
        </div>
      </div>
    </div>
  );
};

export default Page;
