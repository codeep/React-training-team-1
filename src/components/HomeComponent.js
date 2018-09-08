import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../containers/LoginContainer';
import Register from '../containers/RegisterContainer';
import Profile from '../containers/ProfileConatiner';
import NotFoundPage from './404Component';

const Home = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
            <Route path='*' exact={true} component={NotFoundPage} />
        </Switch>
    </div>
);

export default Home;