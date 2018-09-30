import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import SignupPage from '../components/SignupPage';
import LoginPage from '../components/LoginPage';
import EntryModal from '../components/EntryModal';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/dashboard" component={DashboardPage} exact={true} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/" component={LoginPage} />
                <Route component={NotFoundPage}/>
            </Switch>
            <EntryModal />
        </div>
    </BrowserRouter>
)

export default AppRouter;

