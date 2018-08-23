import React, {Component} from 'react';


export default class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        this.setState({
            books: [
                {
                    id: 1,
                    category: 'Mystery',
                    name: 'Angels and Demons',
                    author: 'Dan Brown'
                },

                {
                    id: 2,
                    category: 'Mystery',
                    name: 'The Woman in White',
                    author: 'Wilkie Collins'
                },

                {
                    id: 3,
                    category: 'Mystery',
                    name: 'Code Da Vinchi',
                    author: 'Dan Brown'
                }
            ]
        });
    }



    render() {
        let filter = this.state.books.filter(item => {
            return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        return (
            <ul>
                {filter.map(book => {
                        return <li key={book.id} name={book.name}>{book.name}</li>;
                    }
                )}
            </ul>
        );
    }

}

