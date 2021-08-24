import Image from 'next/image';
import React from 'react';
import Styles from './styles.module.scss';
interface CardMovieProps {
    movieImagePath: string;
    movieOverview: string;
    movieTitle: string;
}

const CardMovie: React.FC<CardMovieProps> = ({ movieImagePath, movieOverview, movieTitle }) => {

    return (
        <React.Fragment>
                <div className={Styles.CardMovieContainer + " container "}>
                    <div className="row">
                        <div className="col-sm">
                            <Image src={movieImagePath} alt="imagen place holder" width="533" height="300" />
                        </div>
                        <div className={Styles.CardMovieDescription + " col-sm-6 "}>
                            <p style={{ color:'white'}} >{movieOverview}</p>
                        </div>
                    </div>
                    <h3 className={Styles.CardMovieTitle}>{movieTitle}</h3>
                </div>
        </React.Fragment>
    )
}

export default CardMovie;