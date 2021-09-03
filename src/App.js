import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        Home Page
      </Route>
      <Route path="/starred" exact>
        Starred Page
      </Route>
      <Route>This is 404 page.</Route>
    </Switch>
  );
}

export default App;
