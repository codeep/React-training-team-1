import React,{Component} from 'react';
import { Card, CardHeader, CardImg, CardBody, CardGroup} from 'reactstrap';



export default class BookCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let bookItems = this.props.item.map(book =>
            <Card key={book.id}>
                <CardHeader>
                    <CardImg src={book.img}/>
                </CardHeader>
                <CardBody>
                    <p>title: <strong>{book.name}</strong></p>
                    <p>Author: <strong>{book.author}</strong></p>
                    <p>Category: <strong>{book.category}</strong></p>
                    <h5>Description</h5>
                    <p>{book.description}</p>
                </CardBody>
            </Card>

        );
        return(
            <div>{bookItems}</div>
        );
    }

}