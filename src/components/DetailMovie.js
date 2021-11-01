import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Image } from "react-bootstrap";
// import "./MoviePage.css";
import Streaming from "./Streaming";
import NavBarMovie from "./NavBarMovie";
import { useParams } from "react-router-dom";


const API_KEY = process.env.API_KEY;

const DetailMovie = () => {
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState({});

    useEffect(() => {
        const fetchMovieDetail = async () => {
          const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`

            const res = await fetch(url);
            const json = await res.json();
            setMovieDetail(json);


        };
        fetchMovieDetail();
    }, [id]);

    return (
        <>
        <div className="DetailMovie" >
            <div className="DetailMovie-container" >
                <div className="DetailMovie-main">
                    <div className="row">
                        <div className="col-6">
                            <img src={"https://image.tmdb.org/t/p/w500/" + movieDetail.poster_path} />
                        </div>
                        <div className="col-6 right">
                            <h4>{movieDetail.title}</h4>
                            <p>
                                Genres:{" "}
                                {movieDetail.genres?.map((e) => {
                                    return (
                                        <Button variant={"success"} className="ml-2 button__btn" key={e.key}
                                            style={{ margin: '10px 5px' }}

                                        >
                                            {e.name}
                                        </Button>
                                    );
                                })}
                            </p>
                            <p>
                                Average Rating: {movieDetail.vote_average}
                            </p>
                            <strong>
                                <p>{movieDetail.overview}</p>
                            </strong>
                            <p>Runtime: {movieDetail.runtime} minutes</p>
                            <Button href={movieDetail.homepage}>To Movie Page</Button>
                            <hr className="solid"></hr>
                        </div>
                    </div>
                </div>
            </div>
            <h4 style={{textAlign:"center" , marginBottom:"5vh"}}>Watch Trailer</h4>
            <div className="youtube-container">
                <Streaming movieDetail={movieDetail} />
            </div>
        </div>
        </>
    );
};

export default DetailMovie;