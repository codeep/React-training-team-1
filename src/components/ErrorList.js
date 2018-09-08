import React, { Component } from 'react';

export default class ErrorList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='errorlist'>{ this.props.item } </div>
        );
    }
}