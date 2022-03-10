import React, { useEffect, useState } from 'react'
import "./Row.css";
// import YouTube from 'react-youtube';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";


  // a snippet of code which runs based on a specific condition

  useEffect(() => {
    // IF [], run once when the component loads and dont run again
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3${fetchUrl}`;
      let data = await fetch(url);
      let request = await data.json();
      console.log(request.results);
      setMovies(request.results);
      // console.log(request);
      // console.log(movies);
      // console.log(movies.name);
    }
    fetchData();


  }, [fetchUrl]);

  // console.log(movies.poster_path);

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     autiplay: 1,

  //   },
  // };


  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movies) =>
        (
          <img key={movies.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movies.poster_path : movies.backdrop_path}`} alt={movies.title} />
        ))}
      </div>
      {/* <YouTube videoId={trailerUrl} opts={opts} /> */}
    </div>
  )
}

export default Row