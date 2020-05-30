import React, { useState, useEffect } from 'react';
import MovieListItem from './MovieListItem';
import styles from '../styles/MovieList.module.css';

export const MovieList = ({match, location}) => {
    const [apiResponse, setApiResponse] = useState({});
    const [searchText, setSearchText] = useState('');
    const fetchPopularMovies = () => {
        fetch("http://localhost:9000")
        .then(res => res.json())
        .then(res => setApiResponse(res));
    }

    useEffect(() => {
        fetchPopularMovies()
    }, []);

    const movieList = Object.values(apiResponse)
                            .map((movie, index) => 
                            <MovieListItem key={index}
                                           movie={movie}
                                           match={match}
                                           location={location}  />);

    const handleSearchOnClick = () => {
        if (searchText !== '' && searchText !== null) {
            fetch(`http://localhost:9000/search/movies?query=${searchText}`)
            .then(res => res.json())
            .then(res => setApiResponse(res));
        } else {
            fetchPopularMovies();
        }
    };

    return (
        <div className={styles.listView}>
            <div className={styles.searchBar}>
            <div className={styles.searchTitle}>Search movies:</div>
            <input className={styles.searchBox}
                   type="text" 
                   name="query" 
                   placeholder="Enter movie name.." 
                   onChange={e => setSearchText(e.target.value)}
            />
            <button className={styles.button} value="Search" onClick={() => handleSearchOnClick()}>
             Search
            </button>
            </div>
            {movieList}
        </div>
    );
};