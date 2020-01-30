import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Pages from './pages';

const isLoggedIn = localStorage.getItem("uid");

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to={'/login'} />
      }
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route path="/" exact component={Pages.Home} />
        <Route path="/login" exact component={Pages.Login} />
        <Route path="/register" exact component={Pages.Register} />
        <PrivateRoute path="/profile" exact component={Pages.Profile} />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
