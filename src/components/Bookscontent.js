import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Addnewbook from './Addnewbook';
import Book from './Book';

const Books = () => (
    <Switch>
        <Route exact path='/book' component={Addnewbook}/>
        <Route path='/book/:number' component={Book}/>
    </Switch>
);

export default Books;
