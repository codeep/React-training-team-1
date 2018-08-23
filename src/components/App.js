import React, {Component} from 'react';
import Navigation from './Navigation';


export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (

            <div className='container-fluid'>
                <Navigation/>
            </div>

        );
    }
}