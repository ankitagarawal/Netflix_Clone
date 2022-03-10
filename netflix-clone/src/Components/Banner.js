import React, { useEffect, useState } from 'react'
import requests from '../requests';
import './Banner.css';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`;
            let data = await fetch(url);
            let request = await data.json();
            // console.log(request);
            // console.log(request.results[0].backdrop_path);
            setMovie(request.results[Math.floor(Math.random() * request.results.length - 1)]
            );
            return request;

        }
        fetchData();
    }, []);

    // console.log(movie);

    //   this function is used to shorten the description in the banner part

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        /* background image */
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
            backgroundPosition: "center center"
        }}>

            <div className="banner__contents">
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom"></div>

        </header>
    )
}

export default Banner