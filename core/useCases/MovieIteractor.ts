import TMDBConfigs from 'core/configs/TMDB';
import { MovieApi, MovieDetailsResults, MovieDetails, MovieVideo, SearchDetails } from './Axios/MovieApi';
import { Movie } from "core/entities/movie";

export class MovieIteractor {

    public async getMovie(iId: number): Promise<MovieDetails> {
        const oMovie = await MovieApi.GetMovie(iId);

        return oMovie;
    }

    public async getTrailer(iId: number): Promise<string> {
        const arMovieVideos = await MovieApi.GetVideos(iId);
        if(arMovieVideos.results.length === 0) return '';

        const arMovieVideosTrailer = arMovieVideos.results.filter(m => m.type.toLowerCase() === "trailer")

        const oMovievideo = arMovieVideosTrailer[0];
        if(oMovievideo.site.toLowerCase() !== 'youtube') return '';

        return TMDBConfigs.youtubeBaseUrl + oMovievideo.key + "?autoplay=1";
    }

    public async getPopulars(): Promise<Record<keyof MovieDetailsResults, unknown>[]> { 
        const { results } = await MovieApi.GetPopular(); //TODO movieApi is coupled in UseCases

        const arMovie = results?.map<Movie>(m => {
            return Movie.Create(m.title, m.original_title, m.overview, m.backdrop_path, m.popularity, m.video);
        }) ?? [];

        return results ?? [];
    }

    public async getSearch(sText: string, iPage: number | null = null ): Promise<SearchDetails> {
        const oSearch = await MovieApi.Search(sText, iPage);
        oSearch.text = sText;

        return oSearch;
    }

}