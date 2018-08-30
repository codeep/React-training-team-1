import React, { Component } from 'react';
import Bookdata from './Bookdata';

export default class Addnewbook extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            title : '',
            author : '',
            imgurl : '',
            category : 'Drama',
            date : '',
            description : '',
            updatedby : sessionStorage.getItem('user'),
            updateddate : new Date().toLocaleString(),
            books: JSON.parse(localStorage.getItem('books'))
        };
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    handletitle(e){
        e.preventDefault();
        this.setState({ title: e.target.value});
    }
    handleauthor(e){
        e.preventDefault();
        this.setState({ author: e.target.value});
    }
    handleimg(e){
        e.preventDefault();
        this.setState({ imgurl: e.target.value});
    }
    handledate(e){
        e.preventDefault();
        this.setState({ date: e.target.value});
    }
    handlecategory(e){
        e.preventDefault();
        this.setState({category: e.target.value});
    }
    handledescription(e){
        e.preventDefault();
        this.setState({ description: e.target.value});
    }

    submitform(e){
        e.preventDefault();
        if(this.state.title !== '' && this.state.author !== '' && this.state.imgurl !== '' && this.state.date !== '' && this.state.description !== '' ){
            let isimg = this.state.imgurl.split('.');
            let lastkey = isimg[isimg.length-1];
            if(lastkey === 'jpg' || lastkey === 'jpeg' || lastkey === 'png' || lastkey === 'svg'){
                let bookdata = JSON.parse(localStorage.getItem('books'));
                let arr = {
                    id: bookdata[bookdata.length - 1].id + 1,
                    title : this.capitalizeFirstLetter(this.state.title),
                    author : this.capitalizeFirstLetter(this.state.author),
                    imgurl : this.state.imgurl,
                    category : this.capitalizeFirstLetter(this.state.category),
                    date : this.state.date,
                    description : this.state.description,
                    updatedby : this.state.updatedby,
                    updateddate : this.state.updateddate
                };
                bookdata.unshift(arr);
                let book = JSON.stringify(bookdata);
                localStorage.setItem('books', book);
                this.setState({
                    books : bookdata
                });
            }else{
                alert('Your link is not an image');
            }
        }else{
            alert('please fill out the form');
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='bookformdiv'>
                    <form onSubmit={(e) => this.submitform(e)}>
                        <input type='text' name='title' placeholder='Title' value={this.state.title} onChange={(e) => this.handletitle(e)}/>
                        <input type='text' name='author' placeholder='Author' value={this.state.author} onChange={(e) => this.handleauthor(e)}/>
                        <input type='text' name='imgurl' placeholder='Img-Url' value={this.state.imgurl} onChange={(e) => this.handleimg(e)}/>
                        <input type="date" name="published" value={this.state.date} onChange={(e) => this.handledate(e)} />
                        <select value={this.state.category} onChange={(e) => this.handlecategory(e)}>
                            <option value="Drama">Drama</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Fantasy">Fantasy</option>
                        </select>
                        <textarea type='textarea' rows='5' cols='40' placeholder='Tell us about the book ...' value={this.state.description} onChange={(e) => this.handledescription(e)}/>
                        <input type='submit' value='Submit' />
                    </form>
                </div>
                <div className='booksdiv'>
                    {   
                        this.state.books.map( i => <Bookdata key={i.id}  data={i}/> )
                    }
                </div>
            </div>
        );
    }
}