import React from 'react';
import Hero from './Hero';
import { Link } from 'react-router-dom';
import imageNotFound from "./imageNotFound.jpg";

// TMDB API Key = 4385874cb88ca729fd9807e46ee98179 //
// Example Link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=4385874cb88ca729fd9807e46ee98179&language=en-US&query=star&page=1&include_adult=false //

const MovieCard = ({ movie }) => {
    const posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const detailURL = `/movies/${movie.id}`;

    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">
                {posterPath !== "https://image.tmdb.org/t/p/w500null" ? (
                                                <img
                                                    src={posterPath}
                                                    className="card-img-top"
                                                    alt={movie.original_title}
                                                />
                                            ) : (
                                                <img
                                                    src={imageNotFound}
                                                    className="card-img-top"
                                                    alt={movie.original_title}
                                                />
                                            )}
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailURL} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}


const Search = ({ keyword, searchResults }) => {
    const title = `You are searching for: ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
        return (
            <MovieCard movie={obj} key={i} />                 
            )
    })

    return (
      <>
        <Hero text={title}/>
        {resultsHtml &&
            <div className='container'>
                <div className="row">
                    {resultsHtml}
                </div>
            </div>
        }
      </>
    )
}

export default Search;