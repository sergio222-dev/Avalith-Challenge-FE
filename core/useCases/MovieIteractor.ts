import { MovieApi, PopularMovieResults } from './Axios/MovieApi';
import { Movie } from "core/entities/movie";

export class MovieIteractor {
    private _movie: Movie;

    public constructor(oMovie = Movie.Create('', '','', '', 0, false)) {
        this._movie = oMovie;
    }

    public getMovie(iId: number): Movie {
        return this._movie;
    }

    public async getPopulars(): Promise<Record<keyof PopularMovieResults, unknown>[]> { 
        const { results } = await MovieApi.GetPopular(); //TODO movieApi is coupled in UseCases

        const arMovie = results?.map<Movie>(m => {
            return Movie.Create(m.title, m.original_title, m.overview, m.backdrop_path, m.popularity, m.video);
        }) ?? [];

        return results ?? [];
    }
}