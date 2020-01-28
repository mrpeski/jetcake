import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Pages from './pages';

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route path="/" exact component={Pages.Home} />
        <Route path="/login" exact component={Pages.Login} />
        <Route path="/register" exact component={Pages.Register} />
        <Route path="/profile" exact component={Pages.Profile} />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
