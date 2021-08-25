import TMDBConfigs from 'core/configs/TMDB';
import { MovieApi, PopularMovieResults, MovieDetails, MovieVideo } from './Axios/MovieApi';
import { Movie } from "core/entities/movie";

export class MovieIteractor {

    public async getMovie(iId: number): Promise<MovieDetails> {
        const oMovie = await MovieApi.GetMovie(iId);

        return oMovie;
    }

    public async getTrailer(iId: number): Promise<string> {
        const movieVideos = await MovieApi.GetVideos(iId);
        if(movieVideos.results.length === 0) return '';
        
        const oMovievideo = movieVideos.results[0];
        if(oMovievideo.site.toLowerCase() !== 'youtube') return '';

        return TMDBConfigs.youtubeBaseUrl + oMovievideo.key + "?autoplay=1";
    }

    public async getPopulars(): Promise<Record<keyof PopularMovieResults, unknown>[]> { 
        const { results } = await MovieApi.GetPopular(); //TODO movieApi is coupled in UseCases

        const arMovie = results?.map<Movie>(m => {
            return Movie.Create(m.title, m.original_title, m.overview, m.backdrop_path, m.popularity, m.video);
        }) ?? [];

        return results ?? [];
    }

}