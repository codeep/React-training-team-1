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
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
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

                    </Nav>
                </Collapse>
            </Navbar>

        );
    }

}

