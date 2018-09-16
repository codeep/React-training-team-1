import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

ErrorList.propTypes = {
    item: PropTypes.string
};