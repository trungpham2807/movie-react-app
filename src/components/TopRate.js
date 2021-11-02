import React, { useEffect, useState } from "react";
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

import PaginationMovie from "./PaginationMovie"
import DetailMovie from "./DetailMovie"
import SliderMovie from "./SliderMovie"
const IMG_API = "https://image.tmdb.org/t/p/w500"



const TopRate = () => {
    const [data, setData] = useState()
    // console.log(data)
    // const handleAsc = () => {
    //     const sort_vote_average = [];

    //     data.map((e) => {
    //         console.log(e.vote_average)
    //         sort_vote_average.push(e.vote_average);
    //     })
    //     const sortAsc = sort_vote_average.sort((a, b) => a - b)

    // }
    useEffect(() => {
        const getData = async () => {
            const req = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=3c7844e5f1c003adb7e62ecf0d6885b7&language=en-US&page=1')
            const res = await req.json()
            setData(res)
        }
        getData()
    })


    return (

        <div>
            <SliderMovie />


            <div class="sort-vote">
                <button>Sort Asc</button>
                <button>Sort Desc</button>
            </div>
            <h1>Top rate</h1>

            <div className="MainPage-container">


                {data?.results && data?.results.map((e) => (
                    <div className="MainPage">
                        <img src={`https://image.tmdb.org/t/p/original${e?.poster_path}`} />
                        <div className="MainPageInfo">
                            <h3>{e.title}</h3>
                            <span>Vote Average: {e.vote_average}</span>
                            <h5>Release Date: {e.release_date}</h5>

                            <h5>Vote Count: {e.vote_count}</h5>
                            <Link to={`/movie/${e.id}`} className="btn btn-primary">Watch Now</Link>
                            <div className="MainPageHover">
                                <h3>Overview:</h3>
                                <p>
                                    {e.overview.length <= 50
                                        ? e.overview
                                        : e.overview.slice(0, 50) + "..."}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>

    )
}

export default TopRate;