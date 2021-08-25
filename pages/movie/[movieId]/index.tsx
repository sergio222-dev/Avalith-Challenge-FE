import CardMovieInfo from "@molecules/CardMovieInfo";
import MovieViewer from "components/organism/MovieViewer";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

// Movie
const Movie: NextPage = () => {
    return (
        <React.Fragment>
            <MovieViewer />
        </React.Fragment>
    )
}

export default Movie;