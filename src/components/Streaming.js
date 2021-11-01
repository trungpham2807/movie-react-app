import React from 'react'
// import "./MoviePage.css";
import { useState, useEffect } from 'react';

const Streaming = ({ movieDetail }) => {
    const API_KEY = process.env.API_KEY;
    const [movieTrailer, setMovieTrailer] = useState("");

    useEffect(() => {
        const fetchYoutubeId = async () => {
            const id = movieDetail.id
            if (movieTrailer !== undefined) {
                const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
                const res = await fetch(url);
                const json = await res.json()
                setMovieTrailer(json)
            };
        }
        fetchYoutubeId()
    })

    return (
        <div style={{ width: '853'}}>
            {
                movieTrailer.results !== undefined && <iframe
                    src={`https://www.youtube.com/embed/${movieTrailer.results[0].key}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    className="video__btn"
                />
            }
        </div>
    )
}

export default Streaming