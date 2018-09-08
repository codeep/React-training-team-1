import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Addnewbook from './AddnewbookContainer';
import ProfileCommonent from '../components/ProfileComponent';
import Bookdata from '../components/BookdataComponent';

export default class ProfileConatiner extends Component {

    constructor() {
        super();
        this.state = {
            userdata: JSON.parse(localStorage.getItem(localStorage.getItem('user'))),
            books: JSON.parse(localStorage.getItem('books'))
        };
    }

    getbooks(bookdata) {
        this.setState({ books: bookdata });
    }

    logout() {
        this.setState({ userdata: '' });
        sessionStorage.removeItem('user');
        this.props.history.push('/');
    }

    render() {

        const { userdata } = this.state;
        return (
            <div>
                <div className='usercontainer'>
                    <ProfileCommonent
                        data={userdata}
                        logout={this.logout.bind(this)} />
                </div>
                <div className='bookscontainer'>
                    <div className='seconddivforbook'>
                        <Addnewbook getbooks={this.getbooks.bind(this)} />
                        <div className='seconddiv'>
                            <div className='booksdiv'>
                                {
                                    this.state.books.map(i => <Bookdata key={i.id} data={i} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
ProfileConatiner.propTypes = {
    history: PropTypes.any
};
