import MovieCard from "./movieSearch";

// Home page

const movieData = [
    {
    Title: "The Avengers",
    Year: "2012",
    Rated: "PG-13",
    },
    {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    Rated: "PG-13",    
    },
    {
    Title: "Avengers: Civil War",
    Year: "2016",
    Rated: "PG-13",    
    }
];

export default function Home(){
    return (

        <div>
            <h1 className="HeaderText">MOVIE APP</h1>
            <h2 style={{ fontStyle: "italic", marginTop: 100}}>Type in what movie you would like information on.</h2>
            <input className="input" id="username" name="username" placeholder="Name of Movie?" required></input>
            <button id="submit" type="submit">Send</button>
            <div className="cardSpacing">
            <MovieCard header={movieData[0].Title} year={movieData[0].Year} rating={movieData[0].Rated}/>
            <MovieCard header={movieData[1].Title} year={movieData[1].Year} rating={movieData[1].Rated}/>
            <MovieCard header={movieData[2].Title} year={movieData[2].Year} rating={movieData[2].Rated}/>
            </div>
        </div>        
    );
}