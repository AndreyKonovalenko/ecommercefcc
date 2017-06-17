import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom'

class Header extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <NavbarToggler right onClick={this.toggle} />
                    <NavbarBrand href="/">FCC eCommerce Project</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink exact activeClassName="active" tag={RRNavLink} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="active" tag={RRNavLink} to="/blog">Blog</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header
