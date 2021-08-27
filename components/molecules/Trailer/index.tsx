import { FC } from 'react';
import { Modal} from 'react-bootstrap';
import styles from './Trailer.module.scss';

interface TrailerProps {
    trailerUrl: string;
    show: boolean;
    onHide: () => void;
}

const Trailer: FC<TrailerProps> = ({trailerUrl, onHide, show}) => {
    return (

        <Modal 
        show={show} 
        onHide={onHide} 
        dialogClassName={styles.ModalDialog} 
        contentClassName={styles.ModalContent} 
        centered>
            <Modal.Body className={styles.ModalBody}>
                <iframe
                src={trailerUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                ></iframe>
            </Modal.Body>
        </Modal>

    )
}


export default Trailer;