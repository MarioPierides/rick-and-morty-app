import { getRedirectStatus } from 'next/dist/lib/load-custom-routes';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: boder-box;
  height: 100vh;
  display: grid;
  grid-template-rows: 4rem 1fr 4rem;
  background-color: #f0ffa3;
}
`;
