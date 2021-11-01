import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import { Container, Navbar, Card, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import NavBarMovie from "../components/NavBarMovie"
import "../App.css"
const SearchMovie = ({ currentPage}) => {
    const { id } = useParams();
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let url = `https://api.themoviedb.org/3/search/movie?api_key=3c7844e5f1c003adb7e62ecf0d6885b7&language=en-US&query=${id}&page=1&include_adult=false`;
            let res = await fetch(url);
            let data = await res.json();
            let Data = data.results;
            setSearchData(Data);
            console.log(searchData);
        };
        fetchData();
    }, [id]);

    return (
        <div>
            <NavBarMovie />
            <div className="search-container">
                {searchData && searchData.map((e) => {
                    return (
                        <div key={e.id} className="search-card">
                            <Card style={{width:"20vw", backgroundColor:"#141414"}} className="each-card">
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${e.poster_path}`} alt="Show Poster" className="search-poster"/>
                                <Card.Body className="search-body">
                                    <Card.Title className="search-title">{e.title}</Card.Title>
                                    <br />
                                    <Card.Subtitle className="search-sub">
                                        Rating: {e.vote_average}
                                    </Card.Subtitle>
                                    <br />
                                    <Card.Text>
                                        {e.overview}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SearchMovie;