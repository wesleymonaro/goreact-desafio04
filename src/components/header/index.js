import React from 'react';
import { connect } from 'react-redux';

import { Container, Logo, CartInfo } from './styles';

const Header = ({cart}) => (
  <Container>
    <Logo href="/">
      <h1>GoCommerce</h1>
    </Logo>

    <CartInfo href="/cart">
      <i class="fa fa-shopping-cart" ></i>

      <span>Meu Carrinho ({cart.products.length})</span>
    </CartInfo>
  </Container>
);

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
