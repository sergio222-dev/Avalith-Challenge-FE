import type { NextPage } from 'next'
import Head from 'next/head'
import Logo from '@atoms/Logo/index';
import PopularMovies from 'components/organism/PopularMovies';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Avalith FE Challenge</title>
                <meta name="description" content="" />
            </Head>
            <main className="container-md debug">
                <div>
                    <Logo />
                </div>
                <div>
                    <PopularMovies />
                </div>
            </main>
        </div>
    )
}

export default Home