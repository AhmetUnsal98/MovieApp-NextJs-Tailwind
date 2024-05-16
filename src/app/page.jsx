import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGJmNDcxYWM5N2UyZDQ5N2M3Yjk4YjU5ZGUwODY4MSIsInN1YiI6IjY2NDU0OGMwYWQwOGEzMDUwNzNkM2ExZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XD1-uLwJmSmthwc3Yjv2PWmyA4hnJn9RPr2txg3lTWg`,
      },
    }
  );
  const data = await res.json();

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
