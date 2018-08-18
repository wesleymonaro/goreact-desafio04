import Imuutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'products/GET_REQUEST',
  GET_SUCCESS: 'products/GET_SUCCESS',
  GET_FAILURE: 'products/GET_FAILURE',
  SET_REQUEST: 'products/SET_REQUEST',
  SET_SUCCESS: 'products/SET_SUCCESS',
  SET_FAILURE: 'products/SET_FAILURE',
};

const initialState = Imuutable({
  loading: false,
  error: null,
  product: {},
});

export default function products(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_SUCCESS:
      return {
        loading: false,
        error: null,
        product: action.payload.data,
      };


    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case Types.SET_REQUEST:
      return {
        ...state,
        currentProduct: action.payload.productId,
      };

    case Types.SET_SUCCESS:
      return {
        ...state,
        currentProduct: action.payload.data.productId,
        products: action.payload.data.products
      };

    case Types.SET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default: return state;
  }
}

export const Creators = {
  getProductRequest: productId => ({
    type: Types.GET_REQUEST,
    payload: { productId }
  }),

  getProductSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  getProductFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),

  setProductRequest: productId => ({
    type: Types.SET_REQUEST,
    payload: { productId },
  }),

  setProductSuccess: data => ({
    type: Types.SET_SUCCESS,
    payload: { data },
  }),

  setProductFailure: error => ({
    type: Types.SET_FAILURE,
    payload: { error },
  }),
};
