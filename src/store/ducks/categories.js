import Imuutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'categories/GET_REQUEST',
  GET_SUCCESS: 'categories/GET_SUCCESS',
  GET_FAILURE: 'categories/GET_FAILURE',
  SET_REQUEST: 'categories/SET_REQUEST',
  SET_SUCCESS: 'categories/SET_SUCCESS',
  SET_FAILURE: 'categories/SET_FAILURE',
};

const initialState = Imuutable({
  data: [],
  loading: false,
  error: null,
  currentCategory: 0,
  products: [],
});

export default function categories(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_SUCCESS:
      return {
        data: action.payload.data.categories,
        loading: false,
        error: null,
        products: action.payload.data.products,
        currentCategory: action.payload.data.currentCategory,
      };

    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case Types.SET_REQUEST:
      return {
        ...state,
        currentCategory: action.payload.categoryId,
      };

    case Types.SET_SUCCESS:
      return {
        ...state,
        currentCategory: action.payload.data.categoryId,
        products: action.payload.data.products
      };

    case Types.SET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default: return state;
  }
}

export const Creators = {
  getCategoriesRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getCategoriesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  getCategoriesFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),

  setCategoryRequest: categoryId => ({
    type: Types.SET_REQUEST,
    payload: { categoryId },
  }),

  setCategorySuccess: data => ({
    type: Types.SET_SUCCESS,
    payload: { data },
  }),

  setCategoryFailure: error => ({
    type: Types.SET_FAILURE,
    payload: { error },
  }),
};
