import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import CartSummary from '../cart/CartSummary';

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand >
            <Link to="/">PROTEINOCEAN</Link>
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink >
                 <Link to="saveproduct">Ürün Ekle</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/mfatihcolak">
                  GitHub
                </NavLink>
              </NavItem>
            <CartSummary></CartSummary>
            </Nav>
            <NavbarText>
              FATİH ÇOLAK
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
