import Logo from "@atoms/Logo";
import Search from "@organism/Search";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout: React.FC = ({children}) => {
    return (
        <div>
            <Navbar className={styles.navbarContainer} sticky="top" expand="md">
                <Container>
                    <Navbar.Brand>
                        <Logo />
                    </Navbar.Brand>
                    <Navbar.Toggle color="red" aria-controls="collapse-nav">
                        <GiHamburgerMenu color="red" />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="collapse-nav" className="justify-content-end">
                        <Nav>
                            <Navbar.Text>
                                <Search />
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <main className="container">
                    {children}
                </main>
            </div>
        </div>
    );
}


export default DefaultLayout;