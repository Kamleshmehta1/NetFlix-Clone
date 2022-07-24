import movieTrailer from 'movie-trailer';
import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import ImgLoader from "./images/loading.gif"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import axios from './Axios';
import "./Row.css"


const base_url = "https://image.tmdb.org/t/p/w500"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    // a code snippet which run on specific conditions
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

        },
        autoplay: 1
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                }).catch((error) => {
                    console.log(error);
                })
        }
    }

    return (
        <div className='row'>
            <h2 className='row-title'>{title}</h2>
            <span className='row-line'></span>

            <div className='row_posters'>
                {movies.map((movie) => (
                    <div key={movie.id} className="card-container">
                        <LazyLoadImage
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={"poster"}
                            className={`${isLargeRow ? "posterLarge" : "poster-img"}`}
                            placeholderSrc={process.env.PUBLIC_URL + ImgLoader}
                            onClick={() => handleClick(movie)}
                        />
                    </div>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row