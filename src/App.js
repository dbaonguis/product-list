import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import ProductList from './components/ProductList';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProductList />
    </ThemeProvider>
  );
};

export default App;
