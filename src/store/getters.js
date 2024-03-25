export default {
  goodsList: state => state.goodsList,
  cartList: state => state.cartList,
  cartTotal: state => {
    return state.cartList.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
  }
}