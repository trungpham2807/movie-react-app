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
const IMG_API = "https://image.tmdb.org/t/p/w200" 



const MainPage = ({data, genre, arrayGenresName, currentPage, totalPage, setCurrentPage}) => {
    //
    // const RouteChange = () => {
    //     const history = useHistory();
    //     history.push("/detail-movie");
    // }

    
    // const genreArray = [];

    //  data.map((hi)=>{
    //     genre.map((e) => {
    //         for(let i=0; i < hi.genre_ids.length; i++){
    //             if(e.id === hi.genre_ids[i]){
    //                 console.log(e.id, e.name)
    //             }
    //           }
    //     })          
    //   })

    // for()




    const handleAsc = () => {
        const sort_vote_average = [];

        data.map((e) => {
            console.log(e.vote_average)
            sort_vote_average.push(e.vote_average);
        })
         const sortAsc = sort_vote_average.sort((a,b) => a-b)

    }

    
    return (
        <div>

            <div>
               {genre.map((e)=> (
                 <button>{e.name}</button>
               ))}
           </div>
           <div>
               <button onClick = {handleAsc}>Sort Asc</button>
               <button>Sort Desc</button>
           </div>
        <h1>Current Playing</h1>
        <span> 
        <PaginationMovie currentPage={currentPage} totalPage = {totalPage} setCurrentPage={setCurrentPage}/>

        </span>
        <div className ="MainPage-container">
       
    
            {data.map((e) => (
                <div className ="MainPage">
                    <img src={IMG_API + e.poster_path} alt={e.title} />
                    <div className="MainPageInfo">
                        <h3>{e.title}</h3>
                        <span>Vote Average: {e.vote_average}</span>
                        <h5>Release Date: {e.release_date}</h5>
                        <button>
                            {/* Genre: {genresArray.join(',')} */}
                            {/* {genre.map((genre) => {
                                    for(let i=0; i < e.genre_ids.length; i++){
                                        if(genre.id === e.genre_ids[i]){
                                            <div>Genre: {genre.name}</div>
                                            console.log("test", genre.name)

                                            }
                                    }
                                })   
                            } */}
                        </button>
                        <h5>Vote Count: {e.vote_count}</h5>
                        {/* <Link to={"/DetailMovie"} className="btn btn-primary">Watch Now</Link> */}

                        <Link to={`/movie/${e.id}`} className="btn btn-primary">Watch Now</Link>
                        {/* <button onClick = {RouteChange}>Watch</button> */}
                    <div className="MainPageHover">
                        <h3>Overview:</h3>
                        <p>
                            {e.overview.length <= 50
                            ? e.overview
                        :e.overview.slice(0,50) + "..."}
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

export default MainPage;