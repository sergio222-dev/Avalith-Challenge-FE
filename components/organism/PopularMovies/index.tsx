import CardMovie from "@molecules/CardMoviePopulars";
import { fetchPopulars } from "core/adapters/Redux/Movies/Thunks";
import { useAppDispatch, useAppSelector } from "core/frameworks/Redux/hooks";
import { useEffect } from "react";
import TMDBConfig from '../../../core/configs/TMDB';
import Styles from './styles.module.scss';

const PopularMovies = () => {

    const { movies } = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchPopulars());
    }, []);

    return (
        <div className={Styles.PopularesContainer}>
            <hr />
            <h2>Populares</h2>
            <hr />
            {movies.map(m => {
                return (<CardMovie 
                    key={m.id}
                    movieTitle={m.title}
                    movieImagePath={TMDBConfig.imageBackUrl + m.backdrop_path} 
                    movieOverview={m.overview}
                    releaseDate={m.release_date}
                    popularity={m.popularity}
                    id={m.id}
                    />)
            })}
        </div>
    );
}

export default PopularMovies;