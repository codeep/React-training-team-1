import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class BookItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {

        return (
            <div>
                <Button color="danger" onClick={this.toggle}>More...</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <div className="bg"></div>
                    <ModalHeader toggle={this.toggle}>
                        title: {this.props.buttonLabel.title}
                    </ModalHeader>
                    <ModalBody>
                        <div className="col-sm-5 col-md-5 col-lg-5 float-left">
                            <h3>Autor: {this.props.buttonLabel.author}</h3>
                            <h4>Category: {this.props.buttonLabel.category}</h4>
                            <img src={this.props.buttonLabel.imgurl}/>
                            <p>Uploaded by: {this.props.buttonLabel.uploadedBy}</p>
                            <p>date: {this.props.buttonLabel.date}</p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 float-left">
                            <h5>Description</h5>
                            <p>{this.props.buttonLabel.description}</p>
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}