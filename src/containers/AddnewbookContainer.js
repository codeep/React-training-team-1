import React, { Component } from 'react';
import sha1 from 'sha1';
import superagent from 'superagent';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

export default class Addnewbook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            author: '',
            imgurl: '',
            category: 'Drama',
            date: '',
            description: '',
            updatedby: sessionStorage.getItem('user'),
            updateddate: new Date().toLocaleString(),
            books: JSON.parse(localStorage.getItem('books'))
        };
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    handletitle(e) {
        e.preventDefault();
        this.setState({ title: e.target.value });
    }
    handleauthor(e) {
        e.preventDefault();
        this.setState({ author: e.target.value });
    }
    handleimg(file) {
        let img = file[0];
        const cloudName = 'uploadeimageforbook';
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
        const timeStamp = Date.now() / 1000;
        const uploadPreset = 'ndzzwhjm';
        const paramStr = `timestamp=${timeStamp}&upload_preset=${uploadPreset}DWbCwq7J1fbFzuJJqGO2yPfp5t8`;
        const signature = sha1(paramStr);

        const params = {
            'api_key': '956412542341617',
            'timestamp': timeStamp,
            'upload_preset': uploadPreset,
            'signature': signature
        };

        let uploadRequest = superagent.post(url);
        uploadRequest.attach('file', img);

        Object.keys(params).forEach((key) => {
            uploadRequest.field(key, params[key]);
        });

        uploadRequest.end((err, resp) => {
            if (err) throw err;

            this.setState({ imgurl: resp.body.secure_url });
        });


    }
    handledate(e) {
        e.preventDefault();
        this.setState({ date: e.target.value });
    }
    handlecategory(e) {
        e.preventDefault();
        this.setState({ category: e.target.value });
    }
    handledescription(e) {
        e.preventDefault();
        this.setState({ description: e.target.value });
    }

    submitform(e) {
        e.preventDefault();
        if (this.state.title !== '' && this.state.author !== '' && this.state.imgurl !== '' && this.state.date !== '' && this.state.description !== '') {
            let bookdata = JSON.parse(localStorage.getItem('books'));
            let arr = {
                id: bookdata[0].id + 1,
                title: this.capitalizeFirstLetter(this.state.title),
                author: this.capitalizeFirstLetter(this.state.author),
                imgurl: this.state.imgurl,
                category: this.capitalizeFirstLetter(this.state.category),
                date: this.state.date,
                description: this.state.description,
                updatedby: this.state.updatedby,
                updateddate: this.state.updateddate
            };
            bookdata.unshift(arr);
            let book = JSON.stringify(bookdata);
            localStorage.setItem('books', book);
            this.setState({
                id: 0,
                title: '',
                author: '',
                imgurl: '',
                category: 'Drama',
                date: '',
                description: '',
            });
            this.props.getbooks(bookdata);
        } else {
            alert('please fill out the form');
        }
    }

    render() {
        return (
            <div className='bookformdiv'>
                <div className='divfortitle'>Add new book</div>
                <form onSubmit={(e) => this.submitform(e)}>
                    <div>
                        <input className='addnewbooktext' type='text' name='title' placeholder='Title' value={this.state.title} onChange={(e) => this.handletitle(e)} />
                        <input className='addnewbooktext' type='text' name='author' placeholder='Author' value={this.state.author} onChange={(e) => this.handleauthor(e)} />
                    </div>
                    <div>Drop your image here ...
                        <Dropzone className='dropzone' onDrop={this.handleimg.bind(this)} />
                    </div>
                    <div>
                        <input className='addnewbooktext' type="date" name="published" value={this.state.date} onChange={(e) => this.handledate(e)} />
                        <select className='addnewbooktext' value={this.state.category} onChange={(e) => this.handlecategory(e)}>
                            <option value="Drama">Drama</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Fantasy">Alternate History</option>
                            <option value="Fantasy">Horror</option>
                        </select>
                    </div>
                    <div>
                        <textarea className='addnewbooktext' type='textarea' rows='3' cols='50' placeholder='Tell us about the book ...' value={this.state.description} onChange={(e) => this.handledescription(e)} />
                    </div>
                    <input className='submitformfornewbook' type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

Addnewbook.propTypes = {
    getbooks: PropTypes.func
};