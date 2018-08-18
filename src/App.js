import React, { Fragment } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';
import './styles/global';

import Routes from './routes';
import store from './store';
import Header from './components/header';
import Categories from './components/categories';

import { Container, Content } from './styles/components';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <Header />
        <Categories />
        <Routes />
      </Container>
    </BrowserRouter>
  </Provider>
);

export default App;
