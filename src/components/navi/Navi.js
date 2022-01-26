import React, { Component } from 'react';
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
          <NavbarBrand href="/">
            reactstrap
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/components/">
                  ÜRÜN EKLE
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
