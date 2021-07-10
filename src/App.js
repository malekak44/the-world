import './App.css';
import Home from './components/Home/Home';
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import NotFound from './NotFound/NotFound';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/country/:name">
            <CountryDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
