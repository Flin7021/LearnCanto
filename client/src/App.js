import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import FlashcardList from './components/FlashcardList';
import Favorites from './components/Favorites';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/" component={FlashcardList} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
