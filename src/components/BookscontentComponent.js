import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Addnewbook from '../containers/AddnewbookContainer';
import Book from '../containers/BookContainer';

const Books = () => (
    <Switch>
        <Route exact path='/profile' component={Addnewbook}/>
        <Route path='/profile/books/:number' component={Book}/>
    </Switch>
);

export default Books;