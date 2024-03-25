export const SET_GOODS_LIST = 'SET_GOODS_LIST';
export const SET_CART_LIST = 'SET_CART_LIST';
export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';


export default {
  [SET_GOODS_LIST](state, goodsList) {
    state.goodsList = goodsList;
  },
  [SET_CART_LIST](state, cartList) {
    state.cartList = cartList;
  },
  [ADD_CART](state, goods) {
    const isExist = state.cartList.some(item => item.id === goods.id);
    if (isExist) {
      state.cartList = state.cartList.map(item => {
        if (item.id === goods.id) {
          item.count++;
        }
        return item;
      });
    } else {
      state.cartList.push({
        ...goods,
        count: 1
      });
    }
  },
  [REMOVE_CART](state, goods) {
    const index = state.cartList.findIndex(item => item.id === goods.id);
    if (index !== -1) {
      if(state.cartList[index].count > 1) {
        state.cartList[index].count--;
        return;
      }
      state.cartList.splice(index, 1);
    }
  }
}