import React, { Component } from 'react';

import {
  Container,
  Products,
  Image,
  HeaderInfo,
  TextInfo,
  Price,
  Input,
  ProductRow,
  DeleteButton,
  TotalInfo,
  TotalPrice
} from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../store/ducks/products';
import { Creators as CategoriesActions } from '../../store/ducks/categories';
import { Creators as CartActions } from '../../store/ducks/cart';

class Cart extends Component {

  componentDidMount(){
    this.props.getCategoriesRequest();
  }

  render() {
    const { products } = this.props.cart;

    return (
      <Container>

        <Products>
          <thead>
            <tr>
              <HeaderInfo></HeaderInfo>
              <HeaderInfo>PRODUTO</HeaderInfo>
              <HeaderInfo>VALOR</HeaderInfo>
              <HeaderInfo>QTD</HeaderInfo>
              <HeaderInfo>SUBTOTAL</HeaderInfo>
              <HeaderInfo></HeaderInfo>
            </tr>
          </thead>

          <tbody>
            {
              products.map(product => (
                <ProductRow>
                  <Image>
                    <img src={product.image} alt={product.name} />
                  </Image>
                  <TextInfo>
                    <strong>{product.name}</strong>
                    <small>{product.brand}</small>
                  </TextInfo>
                  <Price>
                    R${product.price}
                  </Price>
                  <Input>
                    <input type="number" onChange={e => this.props.changeProductQtdRequest(product.id, e.target.value)} value={product.qtd} />
                  </Input>
                  <Price>
                    R${product.price * product.qtd}
                  </Price>
                  <DeleteButton>
                    <button onClick={() => this.props.removeProductCartRequest(product.id)}><i class="fa fa-times" aria-hidden="true"></i></button>
                  </DeleteButton>
                </ProductRow>
              ))
            }
          </tbody>
        </Products>

        <TotalInfo>
          Total: <TotalPrice>R${this.props.cart.total}</TotalPrice>
        </TotalInfo>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators({...ProductsActions, ...CategoriesActions, ...CartActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

