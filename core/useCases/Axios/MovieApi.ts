import { Movie } from 'core/entities/movie';
import AxiosMovieInstance from 'core/frameworks/axios';

interface PopularsResults {
    results?: PopularMovieResults[];
}

export interface PopularMovieResults {
    title: string;
    original_title: string;
    overview: string;
    popularity: number;
    video: boolean;
    backdrop_path: string;
}

export class MovieApi {
    private constructor(){}

    public static async GetPopular(): Promise<PopularsResults> {
        const { data } = await AxiosMovieInstance.get<PopularsResults>(`/movie/popular`);

        return data;
    }
}