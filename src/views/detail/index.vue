<template>
  <div class="page">
    <NavBar></NavBar>
    <div class="main-wrap">
      <div class="detail-wrap">
        <div class="detail-container">
          <img class="detail-img" :src="detail.imgSrc" alt="">
          <div class="detail-info">
            <div class="detail-title">{{ detail.name }}</div>
            <div class="introduction">
              {{ detail.detailDesc }}
            </div>
            <div class="detail-price">
              <span>¥{{ detail.price }}</span>
            </div>
            <div class="detail-btns">
              <button class="cart-btn" @click="addToCart">
                Add to Cart
              </button>
              <button class="buy-btn" @click="handleBuy">
                Go to Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="more-wrap">
        <div class="more-title">More Graphics</div>
        <div class="more-imgs">
          <div class="more-item" v-for="item in moreInfo" :key="item.id">
            <img class="more-item-img" :src="item.imgUrl" alt="">
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<style lang="stylus" scoped src="@/style/detail.styl"></style>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  name:'Detail',
  components:{
    NavBar,
    Footer
  },
  data(){
    return {
      detail:{},
      moreInfo:[]
    }
  },
  created(){
    const str = this.$route.params.item
    const item = JSON.parse(str)
    console.log(item)
    this.processDetail(item)
  },
  methods:{
    // 获取详情 调用接口
    fetchDetail(){

    },
    processDetail(item){
      const imgStr = item.imgSrc

      this.detail = {
        ...item,
        imgSrc: require('../../assets/image/' + imgStr + 'More/detail.png'),
      }
      console.log(this.detail)
      this.moreInfo = [
        {
          id:'01',
          title:'',
          imgUrl:require('../../assets/image/' + imgStr +'More/more1.png')
        },
        {
          id:'02',
          title:'',
          imgUrl:require('../../assets/image/' + imgStr +'More/more2.png')
        },
        {
          id:'03',
          title:'',
          imgUrl:require('../../assets/image/' + imgStr +'More/more3.png')
        },
        {
          id:'04',
          title:'',
          imgUrl:require('../../assets/image/' + imgStr +'More/more4.png')
        }
      ]
    },
    addToCart(){
      this.$store.dispatch('addCart',this.detail)
    },
    handleBuy(){
      this.$router.push('/cart')
    }
  }
}
</script>