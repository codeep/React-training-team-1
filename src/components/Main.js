import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bookscontent from './Bookscontent';
import Home from './Home';
import NotFoundPage from './404';

const Main = () => (
    <main>
        <Switch>
            <Route path='/' component={Home} />
            <Route path='/book' component={Bookscontent} />
            <Route path='*' exact={true} component={NotFoundPage} />
        </Switch>
    </main>
);

export default Main;