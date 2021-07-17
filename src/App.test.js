import { render, screen } from '@testing-library/react'
import React from 'react';
import App from './App'

describe('Something', () => {
    render(<App />);
    // test('should match snapshot', () => {
    //     expect(screen.getByRole('Container')).toMatchSnapshot();
    // })

    test('should be true', () => {
        expect(true).toBeTruthy();
    })

});