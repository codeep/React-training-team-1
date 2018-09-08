import React, { Component } from 'react';
import AddNewBook from './Addnewbook';

export default class Newsfeed extends Component {

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