import type { NextPage } from 'next'
import PopularMovies from 'components/organism/PopularMovies';
import React from 'react';

const Home: NextPage = () => {
    return (
        <React.Fragment>
            <PopularMovies />
        </React.Fragment>
    )
}

export default Home