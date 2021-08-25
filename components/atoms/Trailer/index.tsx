import { FC } from 'react';

interface TrailerProps {
    trailerUrl: string;
}

const Trailer: FC<TrailerProps> = ({trailerUrl}) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                      <iframe
                      width="560"
                      height="315"
                      src={trailerUrl}
                      frameBorder="0"
                      allowFullScreen
                      ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trailer;