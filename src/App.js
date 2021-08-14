import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header'
import Footer from './Footer'
import Calculator from './Calculator';

function App() {
    return (
        <>
            <Container className="container" aria-label='app'>
                <Header />
                <Calculator />
            </Container>
            <Footer />
        </>
    );
}
export default App;
