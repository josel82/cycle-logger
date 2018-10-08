import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import SignupPage from '../components/SignupPage';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={ history }>
        <div>
            <Header />
            <Switch>
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/" component={LoginPage} exact={true}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;

