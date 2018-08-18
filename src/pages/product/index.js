import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../store/ducks/products';
import { Creators as CategoriesActions } from '../../store/ducks/categories';
import { Creators as CartActions } from '../../store/ducks/cart';

import { Container, Image, ImageBox, ProductBox, Name, Brand, Price, AddToCart } from './styles';

class Product extends Component {

  componentDidMount(){
    this.props.getProductRequest(this.props.match.params.id);
    this.props.getCategoriesRequest();
  }

  addProductToCart = (product) => {
    this.props.addProductToCartRequest(product.id);
  }

  render() {
    const {product} = this.props.products;
    return (
      <Container>
        <ImageBox>
          <Image
            src={product.image}
            alt={product.name}
          />
        </ImageBox>

        <ProductBox>
          <Name>{product.name}</Name>
          <Brand>{product.brand}</Brand>
          <Price>R${product.price}</Price>
          <AddToCart onClick={() => this.addProductToCart(product)}>ADICIONAR AO CARRINHO</AddToCart>
        </ProductBox>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators({...ProductsActions, ...CategoriesActions, ...CartActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Product);

