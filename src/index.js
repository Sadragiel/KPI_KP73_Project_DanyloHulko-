import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import App from './components/App';
import About from './components/About';
import Gallery from './components/Gallery';
import Article from './components/Article'

//layout
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'

import rootSaga from './sagas';

import createHistory from 'history/createBrowserHistory';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { routerReducer, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer,
  }), 
   composeEnhancers(
    applyMiddleware(sagaMiddleware, logger, routerMiddleware(history))
  ));


sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
  <BrowserRouter>
    <Router history={history}>
      <div className="page-container">
        <Header />  
        <div className="content">
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/city:*" component={App} />
            <Route  path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/article" component={Article} />
            <Route path="/*" component={() => <h1 style={{color:'red'}}>NOT FOUND!!!</h1>} />
          </Switch>
        </div>
        <Footer />
      </div>
        

    </Router>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

