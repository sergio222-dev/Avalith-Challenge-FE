import { SearchDetails } from './MovieApi';
import AxiosMovieInstance from 'core/frameworks/axios';

interface PopularsResults {
    results?: MovieDetailsResults[];
}
export interface MovieDetailsResults {
    title: string;
    id: number;
    original_title: string;
    overview: string;
    popularity: number;
    video: boolean;
    backdrop_path: string;
    release_date: string;
}

export interface MovieDetails {
    backdrop_path: string;
    title: string;
    overview?: string;
    video: boolean;
    popularity: number;
    vote_average: number;
    vote_count: number;
    poster_path: string;
}

interface MovieVideoResults {
    results: Array<MovieVideo>;
}

export interface SearchDetails {
    page: number;
    total_pages: number;
    total_results: number;
    results: Array<MovieDetailsResults>,
    text: string;
}

export interface MovieVideo {
    site: string;
    key: string;
    type: string;
}
export class MovieApi {
    private constructor(){}

    public static async GetMovie(iId: number): Promise<MovieDetails> {
        const { data } = await AxiosMovieInstance.get<MovieDetails>(`/movie/${iId}`);

        return data;
    }

    public static async GetVideos(iId: number): Promise<MovieVideoResults> {
        const { data } = await AxiosMovieInstance.get<MovieVideoResults>(`/movie/${iId}/videos`)

        return data;
    }

    public static async GetPopular(): Promise<PopularsResults> {
        const { data } = await AxiosMovieInstance.get<PopularsResults>(`/movie/popular`);

        return data;
    }

    public static async Search(sText: string, iPage: number | null) {

        const params = iPage !== null ? { query: sText, page: iPage } : { query: sText }

        const { data } = await AxiosMovieInstance.get<SearchDetails>(`/search/movie`, {
            params,
        })

        return data;
    }
}