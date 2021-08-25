import AxiosMovieInstance from 'core/frameworks/axios';

interface PopularsResults {
    results?: PopularMovieResults[];
}
export interface PopularMovieResults {
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
}