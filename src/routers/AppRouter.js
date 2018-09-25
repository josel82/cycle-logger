import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import LoggerPage from '../components/LoggerPage';
import NotFoundPage from '../components/NotFoundPage';
import SignupPage from '../components/SignupPage';
import SigninPage from '../components/SigninPage';
import EntryModal from '../components/EntryModal';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoggerPage} exact={true} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/signin" component={SigninPage} />
                <Route component={NotFoundPage}/>
            </Switch>
            <EntryModal />
        </div>
    </BrowserRouter>
)

export default AppRouter;

