import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from '../../store/ducks/categories';

import { Container, Category } from './styles';

const Categories = ({ categories, setCategoryRequest }) => (
  <Container>
    {
      categories.data.map(category => (
          <Category active={categories.currentCategory === category.id} onClick={() => setCategoryRequest(category.id)} key={category.id}>{category.title}</Category>
      ))
    }
  </Container>
);

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
