import React, { useEffect } from "react";
import Image from 'next/image';
import { useRouter } from "next/dist/client/router";
import TMDBConfigs from 'core/configs/TMDB';
import { fetchMovie, fetchTrailer } from "core/adapters/Redux/Movie/Thunks";
import { useAppDispatch, useAppSelector } from "core/frameworks/Redux/hooks";
import Text from "@atoms/Typography/text";
import CardMovieInfo from "@molecules/CardMovieInfo";

const MovieViewer = () => {

    const { movie, isLoading, trailerUrl } = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    const router = useRouter();

    const { movieId } = router.query;

    useEffect(() => {
        // TODO params validation
        if(movieId === undefined) return;
        if(Array.isArray(movieId)) router.push('/');
        if(movieId == '') router.push('/');
        const sMovieId = movieId as string;
        const iMovieId = parseInt(sMovieId);
        if(isNaN(iMovieId)) router.push('/');

        dispatch(fetchMovie(iMovieId));
        dispatch(fetchTrailer(iMovieId));

    }, [movieId, router, dispatch])

    return (
            <div className="container">
                {
                    isLoading && (<Text>Loading Content</Text>)
                }
                {   !isLoading && (
                    <div className="row">
                            <div className="col-md-4">
                                <Image
                                src={TMDBConfigs.imagePosterUrl + movie.poster_path}
                                width="300"
                                height="450"
                                alt="poster"
                                />
                            </div>
                            <div className="col-md-8">
                                <CardMovieInfo 
                                    overview={movie?.overview ?? 'No overview'}
                                    title={movie.title}
                                    video={movie.video}
                                    vote_average={movie.vote_average}
                                    vote_count={movie.vote_count}
                                    trailer_url={trailerUrl}
                                />
                            </div>
                        </div>
                )}
            </div>
    )
}

export default MovieViewer;