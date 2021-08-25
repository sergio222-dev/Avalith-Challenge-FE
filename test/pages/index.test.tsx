import React from 'react';
import { render, fireEvent } from '../test-utils';
import Populars from 'pages/index';

describe('Populars', () => {
    it('match snapshot', () => {
        const { asFragment } = render(<Populars />);
        expect(asFragment()).toMatchSnapshot();
    })
});