import Logo from "@atoms/Logo";
import React from "react";

const defaultLayout: React.FC = ({children}) => {
    return (
        <div className="container">
            <div>
                <Logo />
            </div>
            <div>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}


export default defaultLayout;