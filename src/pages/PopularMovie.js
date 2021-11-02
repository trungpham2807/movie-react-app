import React, { useEffect, useState } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

import { Card, CardGroup, Button } from "react-bootstrap"

const IMG_API = "https://image.tmdb.org/t/p/w200"
// const HandleHighestMovie = () => {

//     useEffect(() => {
//         const fetchHighestMovie = async () => {
//           const urlHighestRated = "https://api.themoviedb.org/3/discover/movie?api_key=3c7844e5f1c003adb7e62ecf0d6885b7&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
//         //   const url = baseUrl + now_playing_path + apiKey + `&page=${currentPage}`;
//           const res = await fetch(urlHighestRated);
//           const dataPopular = await res.json();
//           setDataPopular(dataPopular.results)
//         }
//         fetchHighestMovie()
//       }, [])
//       return 
// }

const PopularMovie = ({ genre, arrayGenresName, currentPage, totalPage, setCurrentPage }) => {
    const [dataPopular, setDataPopular] = useState([])
    const [highestMovie, setHighestMovie] = useState([])
    const [lowestMovie, setLowestMovie] = useState([])

    useEffect(() => {
        const fetchDataPopular = async () => {
            const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=3c7844e5f1c003adb7e62ecf0d6885b7&language=en-US&page=1"
            //   const url = baseUrl + now_playing_path + apiKey + `&page=${currentPage}`;
            const res = await fetch(url);
            const dataPopular = await res.json();
            setDataPopular(dataPopular.results)
        }
        fetchDataPopular()
    }, [])

    //   useEffect(() => {
    //     const fetchLowestMovie = async () => {
    //       const urlLowestRated = "https://api.themoviedb.org/3/discover/movie?api_key=3c7844e5f1c003adb7e62ecf0d6885b7&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    //     //   const url = baseUrl + now_playing_path + apiKey + `&page=${currentPage}`;
    //       const res = await fetch(urlLowestRated);
    //       const dataPopular = await res.json();
    //       setDataPopular(dataPopular.results)
    //     }
    //     fetchLowestMovie()
    //   }, [])


    return (
        <div>
            <div>
                <button>Sort Asc</button>
                <button>Sort Desc</button>
            </div>
            <h1>Popular Movie</h1>
            <div className="TopRated-container">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    slidesPerGroup={5}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        "clickable": true
                    }}
                    navigation={true}

                >
                    {dataPopular.map((e) => (
                        <SwiperSlide key={e.id}>
                            <div className="TopRated">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={IMG_API + e.poster_path} alt={e.title} />
                                    <Card.Body className="TopRatedInfo">
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Text>{e.genre_ids}</Card.Text>
                                        <Card.Text>{e.vote_average} {e.vote_count}</Card.Text>
                                        <Card.Text>{e.release_date}</Card.Text>
                                        <Link to={`/movie/${e.id}`} className="btn btn-primary">Watch Now</Link>
                                    </Card.Body>
                                </Card>

                            </div>
                        </SwiperSlide>

                    ))
                    }
                </Swiper>


            </div>
        </div>

    )
}
SwiperCore.use([Navigation, Pagination, A11y]);
export default PopularMovie;