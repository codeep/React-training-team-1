import React, {Component} from 'react';
import BookCard from './BookCard';

const bookList = [
    {
        id: 1,
        category: 'Mystery',
        name: 'Angels and Demons',
        author: 'Dan Brown',
        img:'https://cdn2.mhpbooks.com/2017/07/Screen-Shot-2017-07-26-at-4.02.01-PM-200x300.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet fermentum justo. ' +
            'Donec sagittis, tellus nec pharetra commodo, leo tortor ultrices mi, eget mattis justo lectus eget nibh.' +
            ' Vestibulum orci nisl, porta id tortor ac, pretium mollis lorem. Fusce vestibulum ligula aliquam, pharetra ' +
            'ex nec, feugiat ipsum. Pellentesque eget euismod quam, id malesuada nibh. Sed feugiat ultricies turpis sodales rutrum. '
    },

    {
        id: 2,
        category: 'Mystery',
        name: 'The Woman in White',
        author: 'Wilkie Collins',
        img:'http://itsreally10months.com/wp-content/uploads/2015/09/Its-Really-10-Months-Special-Delivery.-Best-Pregnancy-Book-200x300.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet fermentum justo. ' +
            'Donec sagittis, tellus nec pharetra commodo, leo tortor ultrices mi, eget mattis justo lectus eget nibh.' +
            ' Vestibulum orci nisl, porta id tortor ac, pretium mollis lorem. Fusce vestibulum ligula aliquam, pharetra ' +
            'ex nec, feugiat ipsum. Pellentesque eget euismod quam, id malesuada nibh. Sed feugiat ultricies turpis sodales rutrum. '
    },

    {
        id: 3,
        category: 'Mystery',
        name: 'Code Da Vinchi',
        author: 'Dan Brown',
        img:'https://upload.wikimedia.org/wikipedia/commons/d/d4/Tyrant_Books_logo.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet fermentum justo. ' +
            'Donec sagittis, tellus nec pharetra commodo, leo tortor ultrices mi, eget mattis justo lectus eget nibh.' +
            ' Vestibulum orci nisl, porta id tortor ac, pretium mollis lorem. Fusce vestibulum ligula aliquam, pharetra ' +
            'ex nec, feugiat ipsum. Pellentesque eget euismod quam, id malesuada nibh. Sed feugiat ultricies turpis sodales rutrum. '
    }
];

export default class BookList extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BookCard item = {bookList}/>
        );
    }

}

