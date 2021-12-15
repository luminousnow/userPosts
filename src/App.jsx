import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { Container } from './components/Container/Container';

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
