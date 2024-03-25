<template>
  <div class="page">
    <NavBar></NavBar>
    <div class="main-wrap">
      <div class="cart-list">
        <div class="cart-item" v-for="(item,index) in cartList" :key="index">
          <div class="cart-item-left">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="cart-item-right">
            <div class="cart-item-title">{{item.title}}</div>
            <div class="cart-item-price">￥{{item.price}}</div>
            <div class="cart-item-num">x{{item.num}}</div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<style scoped lang="stylus" src="@/style/cart.styl"></style>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { mapGetters } from 'vuex'

export default {
  name:'Cart',
  components:{
    NavBar,
    Footer
  },
  data(){
    return {
      
    }
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  methods:{

  }
}
</script>
