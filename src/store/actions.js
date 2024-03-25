import {
  SET_CART_LIST,
  SET_GOODS_LIST,
  ADD_CART,
  REMOVE_CART
} from './mutations'

export default {
  setGoodsList({commit}, goodsList) {
    commit(SET_GOODS_LIST, goodsList);
  },
  setCartList({commit}, cartList) {
    commit(SET_CART_LIST, cartList);
  },
  addCart({commit}, goods) {
    commit(ADD_CART, goods)
  },
  removeCart({commit}, goods) {
    commit(REMOVE_CART, goods)
  }
}