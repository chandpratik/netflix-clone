import React from 'react';
import GithubCorner from 'react-github-corner';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { useAuthListener } from './hooks';

import * as ROUTES from './constants/routes';
function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
      <GithubCorner
        href="https://github.com/chandpratik/netflix-clone"
        bannerColor="#F40612"
        octoColor="#fff"
        size={70}
        direction="right"
      />
    </Router>
  );
}

export default App;
