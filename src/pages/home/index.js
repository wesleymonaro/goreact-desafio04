import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from '../../store/ducks/categories';

import { Container, Product, Image, Name, Brand, Price } from './styles';

class Home extends Component {

  componentDidMount() {
    this.props.getCategoriesRequest();
  }


  render() {
    return (
      <Container>
        {
          this.props.products.map(product => (
            <Product key={product.id} href={`product/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
              />
              <Name>{product.name}</Name>
              <Brand>{product.brand}</Brand>
              <Price>R${product.price}</Price>
            </Product>
          ))
        }
      </Container>
    );
  }
};

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.categories.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
