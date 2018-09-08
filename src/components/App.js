import React, {Component} from 'react';
import Navigation from './Navigation';
import BookList from './BookList';


export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (

            <div className='container-fluid main'>
                <Navigation/>
                <BookList/>
            </div>

        );
    }
}