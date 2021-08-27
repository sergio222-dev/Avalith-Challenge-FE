import CardMovieList from "@molecules/CardMovieList";
import { useAppSelector } from "core/frameworks/Redux/hooks";
import { Fragment } from "react";
import Pagination from "@molecules/Pagination";

const MovieSearch = () => {

    const { results } = useAppSelector(state => state.search);

    return (
        <Fragment>
            <div>
                <CardMovieList title="Resultados de busqueda" movies={results} />
            </div>
            <Pagination />
        </Fragment>
    )
}

export default MovieSearch;