import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/MovieListItem.module.css';

const MovieListItem = props => {
    const {
        movie: {
            title,
            release_date,
            overview,
            id,
        },
    } = props;

    const date = new Date(release_date);
    const dateFormatted = `${date.getMonth()+1}/${date.getFullYear()}`
    const shortOverview = overview.substring(0, 150).concat('...');

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to={`/movie/${id}`}>{title}</Link>
                <div>{dateFormatted}</div>
            </div>
            <div>
                {shortOverview}
            </div>
        </div>
    );
}

export default MovieListItem;