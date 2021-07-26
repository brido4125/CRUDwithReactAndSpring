import { Container } from '@material-ui/core';
import React from 'react'
import NavBar from './component/router/NavBar';
import AppRouter from './component/router/RouterComponent';

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
