//1. IMPORT
//import css: react-bootstrap
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import react: Router, React, useEffect,useState
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import components
import NavBarMovie from "./components/NavBarMovie"
import MainPage from "./components/MainPage"
import SliderMovie from "./components/SliderMovie"
import FooterMovie from "./components/FooterMovie"
import PaginationMovie from "./components/PaginationMovie"
import SearchMovie from "./components/SearchMovie"
import DetailMovie from "./components/DetailMovie"
//importPage
import PopularMovie from "./pages/PopularMovie"

// 2.App
//2.1. define url
const baseUrl= "https://api.themoviedb.org/3";
const now_playing_path = "/movie/now_playing"
const apiKey = "?api_key=3c7844e5f1c003adb7e62ecf0d6885b7"
const genre_path = "/genre/movie/list"

// 2.2. UseState
// 2.3. fetchData + fetchGenre
// 2.4. GenreName
// 2.5. Render + Router component

function App() {
// 2.2. UseState
//data: dataAPI, query: when search
const [data, setData] = useState([])
const [genre, setGenre] = useState([]);
const [currentPage, setCurrentPage] = useState (1);
const [totalPage, setTotalPage] = useState(20)
const [query, setQuery] = useState("");
const [filterData, setFilterData] = useState([]);
const [dataPopular, setDataPopular] = useState([])
const [searchMovie, setSearchMovie] = useState("")

// 2.3. fetchData
useEffect(() => {
  const fetchData = async () => {
    const url = baseUrl + now_playing_path + apiKey + `&page=${currentPage}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    setData(data.results)
    setTotalPage(Math.ceil(data.total_results / 20));  
  }
  fetchData()
}, [currentPage])
// fetch Data Popular


// fetch genre
useEffect(() => {
  const fetchGenre = async () => {
    const url = baseUrl + genre_path + apiKey;
    console.log(url)
    const res = await fetch(url);
    const genre = await res.json();
    console.log(genre.genres)
    setGenre(genre.genres)
  }
  fetchGenre();
}, [])

// useEffect(() => {
//   const filter = data.filter((e) => e.title.includes(query.toLowerCase()))
//   console.log("filterrrrrrrrr",filter)
//   setFilterData(filter);
// }, [data, query] )
// useEffect(() => {
//   fetchData(query)
// }, [query])
//genreName

// const arrayGenresName = data.map((id) =>{
//     id.genre_ids.map((e)=>{
//       for (let i = 0; i < genre.length; i++){
//         if(genre[i].e === e){
//           console.log(genre[i].name)
//         }
//       }
//     })

//   })
// 2.4. Render + Router component
  return (
    <div className="App">
      <NavBarMovie />
      {/* <SearchMovie query={query} setQuery = {setQuery} searchMovie = {searchMovie} setSearchMovie = {setSearchMovie}/> */}
      {/* <NavBarMovie /> */}

      <Switch>
        {/* <Route path="/" component={MainPage} /> */}
        <Route path ="/search/:id" component = {SearchMovie} />
        <Route exact path="/detail-movie/:id" component = {DetailMovie} />
        <Route exact path="/now-playing" component = {MainPage} />
        <Route exact path="/top-rated" component = {PopularMovie} />
      </Switch>
      <div>
        <MainPage data = {data} genre = {genre} currentPage = {currentPage} setCurrentPage = {setCurrentPage} totalPage = {totalPage}/>
        <PopularMovie dataPopular = {dataPopular} genre = {genre} currentPage = {currentPage} setCurrentPage = {setCurrentPage} totalPage = {totalPage} />
        <FooterMovie />
        
      </div>
    </div>
  );
}

export default App;
