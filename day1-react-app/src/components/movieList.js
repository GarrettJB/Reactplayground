import { useState, useEffect } from "react";
import MovieSearch from "./movieSearch";
import styled from "styled-components";
const MovieCardSpacing = styled.div`

display: flex;
flex: 1;
align-items: center;
justify-content: center;
margin: 0px 0px 0px 0px;
`;

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export default function MovieList() {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState( [] );
    const [search, setSearch] = useState("")
    const [input, setInput] = useState("")
    const [isModalOpen, setIsModalOpen] = useState (false);
      
    useEffect( () => {
    async function getMoviesByName(){ //async lets java know that contents will take a while using await to let it know specifics
       if(input){
        setLoading(true);
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`; //<-- t is from the parameter list on the site and inserted into the url from the website
        const response = await fetch(url); //data that comes back from the API server
        const data = await response.json(); //calling method that converts json to java object 
        console.log('response is: ', data.Search);
        setMovies(data.Search);

        setLoading(false);
      }  
    }
      getMoviesByName();
    }, [input]);//dependency list - if things change in this array the Effect is called again- if its not included YOU WILL RUN INTO AN INFINITE LOOP
  
    function handleSubmit (event){
    setInput(search);
    event.preventDefault();
    }
    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                <label htmlFor="theirName">Their Name</label>
                <input name="theirName" type="text" onChange={(event) => {setSearch(event.target.value);}}/>
                <button type="button" onClick={handleSubmit}>Search</button>
                </form>
            </div>
            <div>Movie List</div>
            {/* () => delacres a funstion but does not call it */}

   
            {!loading ? (
                <div>
                {movies && movies.length >= 0 ? (
                    movies.map((movie) => (
                        <>
                       
                        <MovieSearch  
                        poster = {movie.Poster} 
                        header={movie.Title} 
                        year={movie.Year}
                        id = {movie.imdbID}
                        
                        />

                        
                        </>
                ))
            ) : (
                <div>MOVIE LIST NOT FOUND {console.log("no list found")}</div>
            )}    
                </div>
            ) : (
            <div>Loading...</div>
            )}
        </div>
    );

    }

