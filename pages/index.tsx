import type { NextPage } from 'next'
import PopularMovies from '@organism/MoviePopulars';
import React from 'react';
import { useAppSelector } from 'core/frameworks/Redux/hooks';
import MovieSearch from '@organism/MovieSearch';

const Home: NextPage = () => {
    const { text } = useAppSelector(state => state.search);

    return (
        <React.Fragment>
            {text === '' 
                ? <PopularMovies />
                : <MovieSearch />
            }
        </React.Fragment>
    )
}

export default Home