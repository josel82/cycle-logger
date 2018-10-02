import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import SignupPage from '../components/SignupPage';
import LoginPage from '../components/LoginPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/" component={LoginPage} exact={true}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;

