import { useEffect } from "react";
import CardMovieList from "@molecules/CardMovieList";
import { fetchPopulars } from "core/adapters/Redux/Movies/Thunks";
import { useAppDispatch, useAppSelector } from "core/frameworks/Redux/hooks";

const PopularMovies = () => {

    const { movies } = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchPopulars());
    }, []);

    return (
        <div>
            <CardMovieList movies={movies} title="Populares" />
        </div>
    );
}

export default PopularMovies;