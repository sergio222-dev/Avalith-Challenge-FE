import Image from 'next/image';

interface CardMovieProps {
    movieImagePath: string;
    movieOverview: string;
}

const CardMovie: React.FC<CardMovieProps> = ({ movieImagePath, movieOverview }) => {
    return (
        <div className=" debug">
            <div className="row">
                <div className="col">
                    <Image src={movieImagePath} alt="imagen place holder" width="533" height="300" />
                </div>
                <div className="col-6">
                    <p style={{ color:'white'}} >{movieOverview}</p>
                </div>
            </div>
        </div>
    )
}

export default CardMovie;