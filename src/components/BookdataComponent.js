import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Bookdata extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='bookcon'>
                <div className='imgdiv'>
                    <img width='100px' src={this.props.data.imgurl} />
                </div>
                <div className='infodiv'>
                    <div className='insideinfo'>
                        <span>Title : </span> {this.props.data.title}
                    </div>
                    <div className='insideinfo'>
                        <span>Author : </span> {this.props.data.author}
                    </div>
                    <div className='insideinfo'>
                        <span>Category : </span> {this.props.data.category}
                    </div>
                    <div className='insideinfo'>
                        <span>Published : </span> {this.props.data.date}
                    </div>
                    <div className='insideinfo'>
                        <span>Description : </span> {this.props.data.description.substr(1, 85)} ...
                    </div>
                    <div className='insideinfo'>
                        <span>Uploded By : </span> {this.props.data.updatedby}
                    </div>
                    <div className='insideinfo'>
                        <span>Uploded Date : </span> {this.props.data.updatedate}
                    </div>
                </div>
                {/* <Link className='linkto' to={`/books/${this.props.data.id}`} >Read More >>> </Link> */}
            </div>
        );
    }
}


Bookdata.propTypes = {
    data: PropTypes.any
};