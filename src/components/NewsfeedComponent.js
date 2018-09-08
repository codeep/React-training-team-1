import React, { Component } from 'react';

import AddNewBook from '../containers/AddnewbookContainer';

export default class NewsfeedComponent extends Component {

    constructor() {
        super();  
    }

    render() {
        return (
            <div className='App'>
                <AddNewBook />
            </div>
        );
    }
}