import Logo from "@atoms/Logo";
import MovieSearch from "@organism/MovieSearch";
import Search from "@organism/Search";
import { useAppSelector } from "core/frameworks/Redux/hooks";
import React from "react";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout: React.FC = ({children}) => {
    return (
        <div className="container">
            <div className={styles.navbarContainer}>
                <Logo />
                <Search />
            </div>
            <div>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}


export default DefaultLayout;