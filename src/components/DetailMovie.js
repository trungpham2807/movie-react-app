import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Image, Card } from "react-bootstrap";
// import "./MoviePage.css";
import Streaming from "./Streaming";
import NavBarMovie from "./NavBarMovie";
import { useParams } from "react-router-dom";

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
        <>
        <div className="DetailMovie" >
                return (
        <div>

        <h1>Popular Movie</h1>
        <div className ="TopRated-container">
            
                <div className ="TopRated">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={IMG_API + movieDetail.poster_path} alt={movieDetail.title} />
                <Card.Body className = "TopRatedInfo">
                    <Card.Title>{movieDetail.title}</Card.Title>
                    <Card.Text>{movieDetail.genre_ids}</Card.Text>
                    <Card.Text>{movieDetail.vote_average} {movieDetail.vote_count}</Card.Text>
                    <Card.Text>{movieDetail.release_date}</Card.Text>
                    <Button variant="primary">Watch Now</Button>
                </Card.Body>
                </Card>
            </div>
        )
        
        </div>
        </div>
        </div>
        </>
    );
};

export default DetailMovie;