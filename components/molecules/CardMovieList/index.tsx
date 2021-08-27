import { FC, Fragment } from "react";
import TMDBConfigs from "@configs/TMDB";
import styles from "./CardMovieList.module.scss";
import CardMovie from "@molecules/CardMovieSimple";
import { MovieDetailsResults } from "core/useCases/Axios/MovieApi";
import Separator from "@atoms/Separator";
import { useAppDispatch } from "core/frameworks/Redux/hooks";

interface CardMovieListProps {
    movies: Array<MovieDetailsResults>;
    title: string;
}

const CardMovieList: FC<CardMovieListProps> = ({movies, title}) => {
    return (
        <div className={styles.CardMovieListContainer}> 
            <Separator />
                <h2>{title}</h2>
            <Separator />
        <div className={styles.CardMovieListContainer}>
            {movies.map(m => {
                return (<CardMovie 
                    key={m.id}
                    movieTitle={m.title}
                    movieImagePath={TMDBConfigs.imageBackUrl + m.backdrop_path} 
                    movieOverview={m.overview}
                    releaseDate={m.release_date}
                    popularity={m.popularity}
                    id={m.id}
                    />)
            })}
        </div>

        </div>
    )
}

export default CardMovieList;