// https://www.kyrelldixon.com/blog/setup-jest-and-react-testing-library-with-nextjs
import { render } from '@testing-library/react';
import React, { FC } from 'react';


const Providers: FC = ({ children }) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
        );
}

const customRender = (ui: React.ReactElement, options = {}) => render(ui, {wrapper: Providers, ...options})


export * from "@testing-library/react";

export { customRender as render };