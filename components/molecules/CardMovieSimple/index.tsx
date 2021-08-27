import React from 'react';
import Image from 'next/image';
import Styles from './CardMovieSimple.module.scss';
import { useRouter } from 'next/dist/client/router';
import { cleanSearch } from '@adapters/Redux/Search/Search';
import { useAppDispatch } from 'core/frameworks/Redux/hooks';

interface CardMovieProps {
    movieImagePath: string;
    movieOverview: string;
    movieTitle: string;
    releaseDate: string;
    popularity: number;
    id: number;
}

const CardMovie: React.FC<CardMovieProps> = ({ movieImagePath, id, movieTitle, releaseDate, popularity }) => {

    const router = useRouter();
    const dispatch = useAppDispatch();

    return (
        <React.Fragment>
                <div 
                className={Styles.CardMovieContainer + " container "} 
                onClick={() => { 
                    dispatch(cleanSearch())
                    router.push(`/movie/${id}`);
                }}
                >
                    <div className="row">
                        <div className="col-md">
                            <Image src={movieImagePath} alt="imagen place holder" width="533" height="300" />
                        </div>
                        <div className={Styles.CardMovieDescription + " col-md-6 "}>
                            <h4 className={Styles.CardMovieTitle}>{movieTitle}</h4>
                            <hr style={{color: 'red', border: '2px red solid'}} />
                            <div className="d-flex justify-content-between flex-wrap">
                                <div>Release Date: {releaseDate}</div> 
                                <div>Popularity: {popularity}</div>
                            </div>
                            {/* <p style={{ color:'white'}} >{movieOverview}</p> */}
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default CardMovie;