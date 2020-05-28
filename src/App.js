import React from 'react';
import Home from './Components/Home';
import { Container, MainContent } from './Components/styles';
import FilterTable from './Components/FilterTable';
import Header from './Components/Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Header />
        <MainContent>
          <FilterTable />
          <Home />
        </MainContent>
      </Container>
    );
  }
}

export default App;
