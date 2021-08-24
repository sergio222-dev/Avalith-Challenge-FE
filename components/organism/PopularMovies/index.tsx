import CardMovie from "@molecules/CardMovie";
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

    useEffect( () =>{
        console.log('populars Movies: ',movies);
    }, [movies]);

    return (
        <div className={Styles.PopularesContainer}>
            <hr />
            <h2>Populares</h2>
            <hr />
            {movies.map(m => {
                return (<CardMovie 
                    key={m.title}
                    movieTitle={m.title}
                    movieImagePath={TMDBConfig.imageBackUrl + m.backdrop_path} 
                    movieOverview={m.overview}
                    />)
            })}
        </div>
    );
}

export default PopularMovies;