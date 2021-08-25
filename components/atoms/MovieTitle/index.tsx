import { FC } from "react";
import styles from './movieTitle.module.scss';

const MovieTitle: FC = ({children}) => (
    <h2 className={styles.MovieTitle}>
        {children}
    </h2>
);

export default MovieTitle;