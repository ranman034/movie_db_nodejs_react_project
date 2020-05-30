import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MovieList } from './MovieList';
import MovieDetails from './MovieDetails';

import styles from '../styles/MovieDbContainer.module.css';

export const MovieDbContainer = props => {
    return (
        <div className={styles.container}>
            <Router>
                <Switch>
                    <Route path="/movie/:movieId" component={MovieDetails}/>
                    <Route path='/' component={MovieList} />
                </Switch>
            </Router>
        </div>
    );
};