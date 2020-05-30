import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/MovieDetails.module.css';

const MovieDetails = ({match, location}) => {
    const [apiResponse, setApiResponse] = useState({});
    const { params: { movieId } } = match;

    useEffect(() => {
        fetch(`http://localhost:9000/movie/details?movieId=${movieId}`)
        .then(res => res.json())
        .then(res => setApiResponse(res));
    }, []);

    const {
        title,
        vote_average,
        tagline,
        overview,
        release_date,
        runtime,
    } = apiResponse;

    const date = new Date(release_date);
    const dateFormatted = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
    const voteAverageFormatted = `${vote_average}/10`
    const runTimeFormatted = `${runtime} minutes`;

    return (
        <div className={styles.container}>
            <div className={styles.homeButton}>
                <Link to="/">Home</Link>
            </div>
            <div className={styles.header}>
                <div>{title}</div>
                <div>{dateFormatted}</div>
            </div>
            <div className={styles.details}>
                <div>{voteAverageFormatted}</div>
                <div>{runTimeFormatted}</div>
            </div>
            <div className={styles.tagline}>{`Tagline: ${tagline}`}</div>
            <div className={styles.overview}>
                {overview}
            </div>
        </div>
    );
};

export default MovieDetails;