import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Image, Card } from "react-bootstrap";
// import "./MoviePage.css";
import Streaming from "./Streaming";
import NavBarMovie from "./NavBarMovie";
import { useParams } from "react-router-dom";
import './detailMovie.css'
const IMG_API = "https://image.tmdb.org/t/p/w200"

const API_KEY = process.env.API_KEY;

const DetailMovie = () => {
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState({});

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=3c7844e5f1c003adb7e62ecf0d6885b7`

            const res = await fetch(url);
            const json = await res.json();
            console.log("hihi", json)
            console.log("hihihi", json.results)
            setMovieDetail(json);


        };
        fetchMovieDetail();
    }, [id]);
    console.log("movie detail", movieDetail);
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={"https://image.tmdb.org/t/p/w500/" + movieDetail.poster_path} />
                    </div>
                    <div className="col-6">
                        <div className="col-6 right">
                            <h4>{movieDetail.title}</h4>
                            <p>
                                Genres:{" "}
                                {movieDetail.genres?.map((g) => {
                                    return (
                                        <Button variant={"success"} className="ml-2 button__btn" key={g.key}
                                            style={{ margin: '10px 5px' }}

                                        >
                                            {g.name}
                                        </Button>
                                    );
                                })}
                            </p>
                            <p>
                                {movieDetail.production_companies?.map((p) => {
                                    return (
                                        <Image
                                            key={p.id}
                                            className="mx-3"
                                            style={{ width: "90px", height: "auto" }}
                                            src={`https://image.tmdb.org/t/p/w500/${p.logo_path || "p3ZZzdpYlf6PEz5HR9t5SJQT5dO.png"}`}
                                        />
                                    );
                                })}
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
        </div>
    );
};

export default DetailMovie;