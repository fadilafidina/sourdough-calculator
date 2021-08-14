import { render, screen } from '@testing-library/react'
import React from 'react';
import App from './App'

describe('When render app', () => {
    render(<App />);
    test('should match snapshot', () => {
        expect(screen.getByLabelText('app')).toMatchSnapshot();
    });
});