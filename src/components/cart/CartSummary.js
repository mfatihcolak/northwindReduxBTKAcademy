import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions"
import alertify from "alertifyjs"

class CartSummary extends Component {

    removeFromCart(product){
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + " Sepetten Silindi",1)

    }

    renderEmpty() {
        return (
            <NavItem>
                <NavLink >
                    Sepette Ürün Yok
                </NavLink>
            </NavItem>
        )
    }

    renderSummary() {
        return (
            <UncontrolledDropdown
                inNavbar
                nav
            >
                <DropdownToggle
                    caret
                    nav
                >
                    SEPET
                </DropdownToggle>
                <DropdownMenu end>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge color='danger' onClick={() => this.removeFromCart(cartItem.product)}>X</Badge>
                                {cartItem.product.productName}
                                <Badge color='info'>{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }

                    <DropdownItem divider />
                    <DropdownItem>
                       <Link to={"cart"}> Sepete Git </Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            removeFromCart : bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)