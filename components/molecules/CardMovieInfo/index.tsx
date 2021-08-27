import MovieTitle from "@atoms/MovieTitle";
import Separator from "@atoms/Separator";
import Trailer from "@molecules/Trailer";
import Text from "@atoms/Typography/text";
import Title from "@atoms/Typography/title";
import { useToggle } from "components/hooks/common";
import { FC } from "react";
import styles from "./CardMovieInfo.module.scss";

interface CardMovieInfoProps {
    title: string;
    overview: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    trailer_url: string;
}

const CardMovieInfo: FC<CardMovieInfoProps> = ({title, overview, video, vote_average, vote_count, trailer_url }) => {

    const [isShowing, toggleModal] = useToggle();

    return (
        <div className={styles.CardMovieInfoContainer}>
            <MovieTitle>
                {title}
            </MovieTitle>
            <Separator />
            <Title As="h4">Overview</Title>
            <Text>
                {overview}
            </Text>
            { trailer_url !== '' && (<Text className={styles.CardMovieTrailerLink} onClick={toggleModal} >Play Trailer</Text>) }
            { trailer_url !== '' && isShowing && (<Trailer show={isShowing} onHide={toggleModal} trailerUrl={trailer_url} />) }
        </div>
    );
}

export default CardMovieInfo;