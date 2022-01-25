import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { bindActionCreators } from "redux"
import * as categoryActions from "../../redux/actions/categoryActions"
import * as productActions from "../../redux/actions/productActions"

class CategoryList extends Component {

  componentDidMount() {
    this.props.actions.getCategories()
  }

  selectCategory = (category) => (
    this.props.actions.changeCategory(category),
    this.props.actions.getProducts(category.id)
  )

  render() {
    return (
      <div>
        <h3><Badge color='danger'>CATEGORIES</Badge></h3>
        <ListGroup tag= "button">
          {
            this.props.categories.map(category => (
              <ListGroupItem action  tag="button"  onClick={() => this.selectCategory(category)} key={category.id} >
                <Button size="large" color="primary"
                  outline>
                  {category.categoryName}
                </Button>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
