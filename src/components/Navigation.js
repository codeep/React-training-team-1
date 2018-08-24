import React, {Component} from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            search: '',
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    updateSearch(event) {
        this.setState({
            search: event.target.value.substr(0, 20)
        });
    }


    render() {

        return (
            <div>
                <Navbar color="light" light expand="lg">
                    <NavbarBrand href="/">books</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Categories
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Romance
                                    </DropdownItem>
                                    <DropdownItem>
                                        Mystery
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>
                                        Horror
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="/">AudeoBooks</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Saved</NavLink>
                            </NavItem>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                    aria-label="Search" value={this.state.search}
                                    onChange={this.updateSearch.bind(this)}/>
                            </form>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

