import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import '../assets/stylesheets/application.scss';
import postsReducer from './reducers/posts_reducer';

import PostsIndex from './containers/posts_index';
import PostsNew from './containers/posts_new';
import PostShow from './containers/post_show';

const reducers = combineReducers({
  posts: postsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={PostsIndex} />
        <Route path="/posts/new" exact component={PostsNew} />
        <Route path="/posts/:id" component={PostShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
