import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header'
import Calculator from './Calculator';

function App() {
    return (
        <Container class="container">
            <Header />
            <Calculator />
        </Container>
    );
}
export default App;
